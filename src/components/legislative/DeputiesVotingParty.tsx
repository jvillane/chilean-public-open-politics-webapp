import React, {useEffect, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, CardContent, Grid, Hidden} from "@material-ui/core";
import {Diputados, Votacion} from "../../services/deputies.model";
import Avatar from "react-avatar";
import CountUp from "react-countup";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {AvatarGroup} from "@material-ui/lab";
import {Party} from "../../services/deputies.service";
import {getMedia, getMediadetails} from "../../services/profile.service";
import {BASE_URL} from "../../config";
import {DeputyMini} from "./DeputyMini";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface PartyDetails {
  deputies: Diputados
  party: Party
}

interface Props {
  partyDetails: PartyDetails
  voting: Votacion
}

type VoteType = 'A Favor' | 'En Contra' | 'Abstencion' | 'Dispensado';

export const DeputiesVotingParty: React.FC<Props> = ({partyDetails, voting}) => {

  const [deputiesVotes, setDeputiesVotes] = useState<{ [key in VoteType]: Diputados }>();
  const [expandedAccordion, setExpandedAccordion] = useState<{ [key in VoteType]: boolean }>({
    'A Favor': false,
    'En Contra': false,
    Abstencion: false,
    Dispensado: false
  });

  useEffect(() => {
    getMedia()
      .then(() => {
        const deputiesVotes: { [key in VoteType]: Diputados } = {
          'A Favor': {},
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
              deputiesVotes['A Favor'][deputyId] = partyDetails.deputies[deputyId];
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
            {(['A Favor', 'En Contra', 'Abstencion', 'Dispensado'] as VoteType[]).map((vote: VoteType) => {
              const voteNumber = Object.keys(deputiesVotes[vote]).length;
              if (voteNumber > 0) {
                const color = vote === "A Favor" ? "success" : vote === "En Contra" ? "danger" : vote === "Abstencion" ? "warning" : "dark";
                const icon = vote === "A Favor" ? "check" : vote === "En Contra" ? "times" : vote === "Abstencion" ? "ban" : "ban";
                return (
                  <Accordion key={`${partyDetails.party.Alias}_${vote}`}
                             className="political-party-votation-detail my-0"
                             onChange={
                               (event, expanded) =>
                                 setExpandedAccordion({...expandedAccordion, [vote]: expanded})
                             }>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                      <div className="title">
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                          <Button size="small" variant="text"
                                  className={`btn-animated-icon d-30 btn-pill p-0 btn-icon btn-${color}`}>
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', icon]}/>
                            </span>
                          </Button>
                          <Hidden mdDown>
                            <div className="icon-result-text">
                              <Grid container direction="column" justify="center" alignItems="center">
                                <div className="font-size-sm text-black-50">{vote}</div>
                                <div className={`display-4 line-height-1 font-weight-bold text-${color}`}>
                                  <CountUp start={0} end={voteNumber} duration={4} delay={2} separator="" decimals={0}
                                           decimal=","/>
                                </div>
                              </Grid>
                            </div>
                          </Hidden>
                          <div className="avatars pl-3">
                            <AvatarGroup max={6} hidden={expandedAccordion[vote]}>
                              {Object.values(deputiesVotes[vote]).map(deputy => {
                                const mediaDetails = getMediadetails(deputy.Id);
                                const name = `${deputy.Nombres} ${deputy.ApellidoPaterno} ${deputy.ApellidoMaterno}`;
                                if (mediaDetails?.avatar) {
                                  return (
                                    <Avatar key={`${deputy.Id}`} round className="d-50" alt={name}
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
                        </Grid>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={0}>
                        {Object.keys(deputiesVotes[vote]).map(deputyId => {
                          const deputy = deputiesVotes[vote][deputyId];
                          return (
                            <Grid key={`deputy_${deputyId}`} item xs={1} md={4} lg={3} className="text-center">
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
