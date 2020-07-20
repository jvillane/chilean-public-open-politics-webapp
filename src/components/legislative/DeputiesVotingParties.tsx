import React, {useEffect, useState} from "react";
import {Votacion} from "../../services/deputies.model";
import {getDeputies} from "../../services/deputies.service";
import {VotingParty, VotingPartyProps} from "./VotingParty";
import {getPublicFigurePartyId, getPublicFigures} from "../../services/profile.service";
import {getParties} from "../../services/parties.service";
import {getDeputyVotingValue} from "./_legislative.types";

interface Props {
  voting: Votacion
}

export const DeputiesVotingParties: React.FC<Props> = ({voting}) => {
  const [state, setState] = useState<VotingPartyProps[]>();

  useEffect(() => {
    Promise.all([getPublicFigures(), getDeputies(), getParties()])
      .then(result => {
        const pfs = result[0], deputies = result[1], parties = result[2];
        const aux: { [id: string]: VotingPartyProps } = {};
        for (const deputyId in voting.Votos) {
          const vote = voting.Votos[deputyId];
          const deputy = deputies[deputyId];
          const pf = pfs[deputy.FiguraPublicaId];
          const partyId = getPublicFigurePartyId(pf, voting.Fecha);
          if (partyId === undefined) {
            console.error('No se encontró el partido para', deputy, pf);
            continue;
          }
          const party = parties[partyId];
          if (aux[party.Sigla] === undefined) {
            aux[party.Sigla] = {
              party: party,
              type: "DEPUTY",
              votes: []
            };
          }
          aux[party.Sigla].votes.push({
            PublicFigureId: pf.Id,
            Vote: getDeputyVotingValue(vote)
          })
        }
        setState(Object.values(aux));
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {state && state
        .sort((s1, s2) => s2.votes.length - s1.votes.length)
        .map(value => {
          return (
            <VotingParty key={value.party.Sigla} party={value.party} type={"DEPUTY"} votes={value.votes}/>
          )
        })
      }
    </>
  )
}
