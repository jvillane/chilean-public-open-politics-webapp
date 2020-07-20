import React from "react";

import {Container, Grid} from '@material-ui/core';
import {SenatorVotings} from "../components/legislative/SenatorsVotings";

export const LegislativeSenatorsVotingView: React.FC = () => {

  return (
    <Container className="text-black text-center py-5">
      <Grid item md={10} lg={8} className="mx-auto pb-4">
        <h2 className="display-3 px-4 font-weight-bold">
          Votaciones Cámara Alta
        </h2>
        <p className="font-size-xl mt-3 mb-0 text-black-50">
          A continuación el listado de votaciones realizadas por las Senadoras y Senadores referentes a Proyectos de Ley que han tenido movimiento después del <b className="text-info">19 de junio del 2020</b>
        </p>
      </Grid>
      <Grid container spacing={2} className="pt-5">
        <Grid item>
          <SenatorVotings/>
        </Grid>
      </Grid>
    </Container>
  )
}
