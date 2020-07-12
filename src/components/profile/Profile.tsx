import React, {useEffect, useState} from "react";
import {Container, Grid, Paper} from "@material-ui/core";
import {getDeputy} from "../../services/deputies.service";
import {getPublicFigure} from "../../services/profile.service";
import {ProfileInfo} from "../../components/profile/ProfileInfo";
import {ProfileTimeline} from "../../components/profile/ProfileTimeline";
import FadeIn from "react-fade-in";
import {FiguraPublica} from "../../services/profile.model";
import {Diputado} from "../../services/deputies.model";

interface Props {
  id?: string
}

interface State {
  publicFigure?: FiguraPublica
  deputy?: Diputado
}

export const Profile: React.FC<Props> = ({id}) => {
  const [state, setState] = useState<State>({});

  useEffect(() => {
    id && getPublicFigure(id)
      .then(publicFigure => {
        if (publicFigure && publicFigure.DiputadoId) {
          const deputyId = Array.isArray(publicFigure.DiputadoId) ? publicFigure.DiputadoId[0] : publicFigure.DiputadoId;
          getDeputy(`${deputyId}`)
            .then(deputy => setState({publicFigure, deputy}))
        } else {
          setState({});
        }
      })
  }, [id])

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper elevation={3}>
            {state.publicFigure && (
              <ProfileInfo publicFigure={state.publicFigure} deputy={state.deputy}/>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={8}>
          <Paper elevation={3}>
            {state.publicFigure && (
              <FadeIn transitionDuration={1000}>
                <ProfileTimeline publicFigure={state.publicFigure} deputy={state.deputy}/>
              </FadeIn>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
