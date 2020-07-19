import React, {useEffect, useState} from "react";
import {Card, Grid} from "@material-ui/core";
import FadeIn from "react-fade-in";
import ContentLoader from "react-content-loader";
import moment from "moment";
import {getVotings, VotacionMap} from "../../services/senators.service";
import {SenatorsVotingMini} from "./SenatorsVotingMini";

export const SenatorVotings: React.FC = () => {
  const [votings, setVotings] = useState<VotacionMap>();

  useEffect(() => {
    getVotings()
      .then(votings => {
        setVotings(votings)
      })
  }, [])

  return (
    <Grid container spacing={2}>
      {votings === undefined && Array.from(Array(12)).map((_, index) => {
        return (
          <Grid key={index} item md={6} xl={4}>
            <Card className="card-box p-4">
              <ContentLoader
                speed={2}
                width={225}
                height={300}
                viewBox="0 0 225 300"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="46" y="19" rx="3" ry="3" width="110" height="10"/>
                <rect x="8" y="79" rx="3" ry="3" width="195" height="2"/>
                <rect x="23" y="48" rx="3" ry="3" width="170" height="10"/>
                <rect x="23" y="103" rx="3" ry="3" width="170" height="10"/>
                <rect x="22" y="129" rx="3" ry="3" width="170" height="10"/>
                <rect x="11" y="159" rx="3" ry="3" width="195" height="2"/>
                <rect x="50" y="181" rx="3" ry="3" width="110" height="10"/>
                <rect x="12" y="208" rx="3" ry="3" width="195" height="2"/>
                <circle cx="43" cy="239" r="15"/>
                <circle cx="160" cy="239" r="15"/>
                <circle cx="100" cy="239" r="15"/>
                <rect x="29" y="268" rx="3" ry="3" width="30" height="10"/>
                <rect x="86" y="268" rx="3" ry="3" width="30" height="10"/>
                <rect x="145" y="267" rx="3" ry="3" width="30" height="10"/>
              </ContentLoader>
            </Card>
          </Grid>
        )
      })}
      {votings && Object.keys(votings)
        .sort((key1, key2) => moment(votings[key2].Fecha).diff(moment(votings[key1].Fecha)))
        .map((votingKey) => {
          return (
            <Grid key={votingKey} item md={6} xl={4}>
              <FadeIn transitionDuration={1000}>
                <SenatorsVotingMini id={votingKey} voting={votings[votingKey]}/>
              </FadeIn>
            </Grid>
          )
        })}
    </Grid>
  )
}
