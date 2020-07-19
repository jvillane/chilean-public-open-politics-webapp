import React, {useEffect, useState} from "react";
import {Votacion} from "../../services/senators.model";
import {VotingParty, VotingPartyProps} from "./VotingParty";
import {getPublicFigurePartyId, getPublicFigures} from "../../services/profile.service";
import {getParties} from "../../services/parties.service";
import {getSenatorVotingValue} from "./_legislative.types";

interface Props {
  voting: Votacion
}

export const SenatorsVotingParties: React.FC<Props> = ({voting}) => {
  const [state, setState] = useState<VotingPartyProps[]>();

  useEffect(() => {
    Promise.all([getPublicFigures(), getParties()])
      .then(result => {
        const pfs = result[0], parties = result[1];
        const aux: { [id: string]: VotingPartyProps } = {};
        for (const pfId in voting.Detalle) {
          const vote = voting.Detalle[pfId];
          const pf = pfs[pfId];
          const partyId = getPublicFigurePartyId(pf, voting.Fecha);
          if (partyId === undefined) {
            console.error('No se encontró el partido para', pf);
            continue;
          }
          const party = parties[partyId];
          if (aux[party.Sigla] === undefined) {
            aux[party.Sigla] = {
              party: party,
              type: "SENATOR",
              votes: []
            };
          }
          aux[party.Sigla].votes.push({
            PublicFigureId: pf.Id,
            Vote: getSenatorVotingValue(vote)
          })
        }
        setState(Object.values(aux));
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {state && state.map(value => {
        return (
          <VotingParty key={value.party.Sigla} party={value.party} type={"DEPUTY"} votes={value.votes}/>
        )
      })}
    </>
  )
}
