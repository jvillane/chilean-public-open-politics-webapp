import React, {useEffect, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Grid} from "@material-ui/core";
import {Diputados, Votacion} from "../../services/deputies.model";
import Avatar from "react-avatar";
import CountUp from "react-countup";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {AvatarGroup} from "@material-ui/lab";
import {Party} from "../../services/deputies.service";
import {getMedia, getMediadetails} from "../../services/profile.service";
import {BASE_URL} from "../../config";
import {DeputyMini} from "./DeputyMini";

export interface PartyDetails {
  deputies: Diputados
  party: Party
}

interface Props {
  partyDetails: PartyDetails
  voting: Votacion
}

type VoteType = 'Afirmativo' | 'En Contra' | 'Abstencion' | 'Dispensado';

export const DeputiesVotingParty: React.FC<Props> = ({partyDetails, voting}) => {

  const [deputiesVotes, setDeputiesVotes] = useState<{ [key in VoteType]: Diputados }>();
  const [expandedAccordion, setExpandedAccordion] = useState<{ [key in VoteType]: boolean }>({
    Afirmativo: false,
    'En Contra': false,
    Abstencion: false,
    Dispensado: false
  });

  useEffect(() => {
    getMedia()
      .then(() => {
        const deputiesVotes: { [key in VoteType]: Diputados } = {
          Afirmativo: {},
          'En Contra': {},
          Abstencion: {},
          Dispensado: {}
        }

        for (const deputyId in partyDetails.deputies) {
          switch (voting.Votos[deputyId].Id) {
            case '0':
              deputiesVotes['En Contra'][deputyId] = partyDetails.deputies[deputyId];
              break;
            case '1':
              deputiesVotes.Afirmativo[deputyId] = partyDetails.deputies[deputyId];
              break;
            case '2':
              deputiesVotes.Abstencion[deputyId] = partyDetails.deputies[deputyId];
              break;
            case '3':
              deputiesVotes.Dispensado[deputyId] = partyDetails.deputies[deputyId];
              break;
          }
        }
        setDeputiesVotes(deputiesVotes);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mb-3">
      <Box className="card-box rounded-top">
        {deputiesVotes && (
          <>
            <CardContent>
              <Grid container direction="row" alignItems="flex-start" justify="space-between">
                <div>
                  <Grid container direction="row" alignItems="center" justify="flex-start">
                    <div className="avatar-icon-wrapper m-0 mr-2 d-50">
                      <Avatar color="blue" value={partyDetails.party.Alias} className="rounded" size="50px"/>
                    </div>
                    <div className="font-size-lg font-weight-bold p-0">
                      {partyDetails.party.Nombre}
                      <div className="font-size-md font-weight-normal text-black-50">
                        {Object.keys(partyDetails.deputies).length} integrantes
                      </div>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </CardContent>
            {(['Afirmativo', 'En Contra', 'Abstencion', 'Dispensado'] as VoteType[]).map((vote: VoteType) => {
              const voteNumber = Object.keys(deputiesVotes[vote]).length;
              if (voteNumber > 0) {
                const color = vote === "Afirmativo" ? "success" : vote === "En Contra" ? "danger" : vote === "Abstencion" ? "warning" : "dark";
                return (
                  <Accordion key={`${partyDetails.party.Alias}_${vote}`}
                             className="political-party-votation-detail my-0"
                             onChange={
                               (event, expanded) =>
                                 setExpandedAccordion({...expandedAccordion, [vote]: expanded})
                             }>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                      <div className="title">
                        <div className="font-size-sm text-black-50">{vote}</div>
                        <Card className="border-0 shadow-none my-1 overflow-visible">
                          <div className={`card-indicator bg-${color}`}/>
                          <div className="display-5 line-height-1 font-weight-bold ml-3">
                            <CountUp start={0} end={voteNumber} duration={4} delay={2} separator="" decimals={0}
                                     decimal=","/>
                          </div>
                        </Card>
                      </div>
                      <div className="avatars">
                        <AvatarGroup max={11} hidden={expandedAccordion[vote]}>
                          {Object.values(deputiesVotes[vote]).map(deputy => {
                            const mediaDetails = getMediadetails(deputy.Id);
                            const name = `${deputy.Nombres} ${deputy.ApellidoPaterno} ${deputy.ApellidoMaterno}`;
                            if (mediaDetails?.avatar) {
                              return (
                                <Avatar key={`${deputy.Id}`} round className="d-40" alt={name}
                                        src={`${BASE_URL}/img/avatar/${mediaDetails.avatar}`}/>
                              )
                            } else {
                              return (
                                <Avatar key={`${deputy.Id}`} round className="d-40" alt={name}/>
                              )
                            }
                          })}
                        </AvatarGroup>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={0}>
                        {Object.keys(deputiesVotes[vote]).map(deputyId => {
                          const deputy = deputiesVotes[vote][deputyId];
                          return (
                            <Grid key={`deputy_${deputyId}`} item md={4} className="text-center">
                              <DeputyMini id={deputyId} deputy={deputy}/>
                            </Grid>
                          )
                        })}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                )
              } else {
                return null;
              }
            })}
          </>
        )}
      </Box>
    </div>
  )
}
