import React, {useEffect, useState} from "react";
import {Card, Grid} from "@material-ui/core";
import {Votaciones} from "../../services/deputies.model";
import {DeputiesVotingMini} from "./DeputiesVotingMini";
import FadeIn from "react-fade-in";
import ContentLoader from "react-content-loader";
import {getVotings} from "../../services/deputies.service";

interface Props {
  year: number
  month: number
}

export const DeputiesVotingsByYear: React.FC<Props> = ({year, month}) => {
  const [votings, setVotings] = useState<Votaciones>();

  useEffect(() => {
    setVotings(undefined);
    getVotings(year, month)
      .then(votings => setVotings(votings))
  }, [year, month])

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
      {votings && Object.keys(votings.Votaciones).map(id => {
        return (
          <Grid key={id} item md={6} xl={4}>
            <FadeIn transitionDuration={1000}>
              <DeputiesVotingMini id={id} voting={votings.Votaciones[id]}/>
            </FadeIn>
          </Grid>
        )
      })}
    </Grid>
  )
}
