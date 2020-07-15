import React, {useEffect, useState} from "react";
import {Votacion} from "../../services/deputies.model";
import {getDeputies, getParties} from "../../services/deputies.service";
import moment from "moment";
import {DeputiesVotingParty, PartyDetails} from "./DeputiesVotingParty";

interface Props {
  voting: Votacion
}

export const DeputiesVotingParties: React.FC<Props> = ({voting}) => {
  const [state, setState] = useState<PartyDetails[]>();

  useEffect(() => {
    //TODO move this logic into a service function
    getDeputies()
      .then(deputies => {
        getParties()
          .then(() => {
            const partiesDetails: { [id: string]: PartyDetails } = {};
            let  i = 1;
            for (const deputyId in voting.Votos) {
              const deputy = deputies[deputyId];
              console.log(i++, deputy);
              for (const militancy of deputy.Militancia) {
                if (moment(voting.Fecha).isBetween(moment(militancy.Inicio), moment(militancy.Termino), 'day', '[]')) {
                  if (partiesDetails[militancy.Id] === undefined) {
                    partiesDetails[militancy.Id] = {
                      deputies: {},
                      party: {
                        Alias: militancy.Alias,
                        Nombre: militancy.Nombre
                      }
                    };
                  }
                  console.log(militancy.Alias);
                  partiesDetails[militancy.Id].deputies[deputyId] = deputy;
                }
              }
            }
            setState(Object.values(partiesDetails));
          })
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {state && state
        .sort(
          (pd1, pd2) => Object.keys(pd2.deputies).length - Object.keys(pd1.deputies).length)
        .map(partyDetail => {
          return (
            <DeputiesVotingParty key={partyDetail.party.Alias} voting={voting} partyDetails={partyDetail}/>
          )
        })}
    </>
  )
}
