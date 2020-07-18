import React, {useEffect, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, CardContent, Grid, Hidden} from "@material-ui/core";
import Avatar from "react-avatar";
import CountUp from "react-countup";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {AvatarGroup} from "@material-ui/lab";
import {getMedia, getMediadetails, getPublicFigures} from "../../services/profile.service";
import {BASE_URL} from "../../config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ProfileMini} from "../profile/ProfileMini";
import {
  GET_LEGISLATOR_ID_PATH,
  LEGISLATOR_ID_KEY,
  LegislatorType,
  Vote,
  VoteType,
  VoteTypeArray,
  VT_BTN,
  VT_ICON, VT_LABEL,
  VT_TEXT
} from "./_legislative.types";
import {FiguraPublica} from "../../services/profile.model";
import {Partido} from "../../services/parties.model";

export interface VotingPartyProps {
  party: Partido
  votes: Vote[]
  type: LegislatorType
}

export const VotingParty: React.FC<VotingPartyProps> = ({party, votes, type}) => {

  const [pfVotes, setPfVotes] = useState<{ [key in VoteType]: FiguraPublica[] }>();
  const [expandedAccordion, setExpandedAccordion] = useState<{ [key in VoteType]: boolean }>({
    VOTE_IN_FAVOR: false,
    VOTE_AGAINST: false,
    VOTE_ABSTENTION: false,
    VOTE_DISPENSED: false
  });

  useEffect(() => {
    Promise.all([getPublicFigures(), getMedia()])
      .then(result => {
        const pfs = result[0];
        const pfVotes: { [key in VoteType]: FiguraPublica[] } = {
          VOTE_IN_FAVOR: [],
          VOTE_AGAINST: [],
          VOTE_ABSTENTION: [],
          VOTE_DISPENSED: []
        }
        for (const vote of votes) {
          pfVotes[vote.Vote].push(pfs[vote.PublicFigureId])
        }
        setPfVotes(pfVotes);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mb-3">
      <Box className="card-box rounded-top">
        {pfVotes && (
          <>
            <CardContent>
              <Grid container direction="row" alignItems="flex-start" justify="space-between">
                <div>
                  <Grid container direction="row" alignItems="center" justify="flex-start">
                    <div className="avatar-icon-wrapper m-0 mr-2 d-50">
                      <Avatar color="blue" value={party.Sigla} className="rounded" size="50px"/>
                    </div>
                    <div className="font-size-lg font-weight-bold p-0">
                      {party.Nombre}
                      <div className="font-size-md font-weight-normal text-black-50">
                        {votes.length} integrantes
                      </div>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </CardContent>
            {VoteTypeArray.map((vote: VoteType) => {
              const voteNumber = Object.keys(pfVotes[vote]).length;
              if (voteNumber > 0) {
                return (
                  <Accordion key={`${party.Alias}_${vote}`}
                             className="political-party-votation-detail my-0"
                             onChange={
                               (event, expanded) =>
                                 setExpandedAccordion({...expandedAccordion, [vote]: expanded})
                             }>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                      <div className="title">
                        <Grid container direction="row" justify="flex-start" alignItems="center">
                          <Button size="small" variant="text"
                                  className={`btn-animated-icon d-30 btn-pill p-0 btn-icon ${VT_BTN[vote]}`}>
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', VT_ICON[vote]]}/>
                            </span>
                          </Button>
                          <Hidden mdDown>
                            <div className="icon-result-text">
                              <Grid container direction="column" justify="center" alignItems="center">
                                <div className="font-size-sm text-black-50">{VT_LABEL[vote]}</div>
                                <div className={`display-4 line-height-1 font-weight-bold ${VT_TEXT}`}>
                                  <CountUp start={0} end={voteNumber} duration={4} delay={2} separator="" decimals={0}
                                           decimal=","/>
                                </div>
                              </Grid>
                            </div>
                          </Hidden>
                          <div className="avatars pl-3">
                            <AvatarGroup max={6} hidden={expandedAccordion[vote]}>
                              {Object.values(pfVotes[vote]).map(pf => {
                                const mediaDetails = getMediadetails(pf.Id);
                                if (mediaDetails?.avatar) {
                                  return (
                                    <Avatar key={`${pf.Id}`} round className="d-50" alt={pf.Nombre}
                                            src={`${BASE_URL}/img/avatar/${mediaDetails.avatar}`}/>
                                  )
                                } else {
                                  return (
                                    <Avatar key={`${pf.Id}`} round className="d-40" alt={pf.Nombre}/>
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
                        {pfVotes[vote].map(pf => {
                          const id = pf[LEGISLATOR_ID_KEY[type]] as string;
                          return (
                            <Grid key={`legislator_${pf.Id}`} item xs={1} md={4} lg={3} className="text-center">
                              <ProfileMini id={pf.Id} link={GET_LEGISLATOR_ID_PATH(type, id)}/>
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
