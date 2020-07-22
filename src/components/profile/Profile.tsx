import React, {useEffect, useState} from "react";
import {Container, Grid, Paper} from "@material-ui/core";
import {getDeputy} from "../../services/deputies.service";
import {getPublicFigure} from "../../services/profile.service";
import {ProfileInfo} from "../../components/profile/ProfileInfo";
import {ProfileTimeline} from "../../components/profile/ProfileTimeline";
import FadeIn from "react-fade-in";
import {FiguraPublica} from "../../services/profile.model";
import {Diputado} from "../../services/deputies.model";
import {Senador} from "../../services/senators.model";
import {getSenator} from "../../services/senators.service";
import ContentLoader from "react-content-loader";

interface Props {
  id?: string
}

interface State {
  publicFigure: FiguraPublica
  deputy?: Diputado
  senator?: Senador
}

export const Profile: React.FC<Props> = ({id}) => {
  const [state, setState] = useState<State>();

  useEffect(() => {
    id && getPublicFigure(id)
      .then(pf => {
        if (pf) {
          const deputyId = Array.isArray(pf.DiputadoId) ? pf.DiputadoId[0] : pf.DiputadoId;
          Promise.all([getDeputy(deputyId), getSenator(pf.SenadorId)])
            .then(result => {
              setState({
                publicFigure: pf,
                deputy: result[0],
                senator: result[1]
              })
            })
        }
      })
  }, [id])

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} lg={3}>
          <Paper elevation={3}>
            {state && (
              <ProfileInfo publicFigure={state.publicFigure} deputy={state.deputy} senator={state.senator}/>
            )}
            {!state && (
              <ContentLoader
                speed={2}
                viewBox="0 0 400 250"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="32" y="184" rx="3" ry="3" width="305" height="17"/>
                <rect x="33" y="226" rx="3" ry="3" width="110" height="10"/>
                <circle cx="107" cy="97" r="75"/>
                <rect x="32" y="252" rx="3" ry="3" width="195" height="10"/>
              </ContentLoader>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7} lg={9}>
          {state && (
            <FadeIn transitionDuration={1000}>
              <ProfileTimeline publicFigure={state.publicFigure} deputy={state.deputy} senator={state.senator}/>
            </FadeIn>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}
