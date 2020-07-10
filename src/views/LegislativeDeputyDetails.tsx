import React, {useEffect, useState} from "react";
import {Container, Grid, Paper} from "@material-ui/core";
import {useParams} from "react-router";
import {Diputado} from "../services/deputies.model";
import {FiguraPublica} from "../services/profile.model";
import {getDeputy} from "../services/deputies.service";
import {getPublicFigure} from "../services/profile.service";
import {DeputyProfileInfo} from "../components/legislative/DeputyProfileInfo";
import {DeputyProfileTimeline} from "../components/legislative/DeputyProfileTimeline";

interface Params {
  id: string
}

interface State {
  deputy?: Diputado
  publicFigure?: FiguraPublica
}

export const LegislativeDeputyDetails: React.FC = () => {
  const {id} = useParams<Params>();
  const [state, setState] = useState<State>({});

  useEffect(() => {
    getDeputy(id)
      .then(deputy => {
        if (deputy && deputy.Id) {
          getPublicFigure(deputy.Id)
            .then(publicFigure => setState({deputy, publicFigure}))
        } else {
          setState({});
        }
      })
  }, [id])

  console.log(state);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper elevation={3}>
            <DeputyProfileInfo deputy={state.deputy} publicFigure={state.publicFigure}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={8}>
          <Paper elevation={3}>
            <DeputyProfileTimeline deputy={state.deputy} publicFigure={state.publicFigure}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
