import React from "react";

import {Container, Grid} from '@material-ui/core';
import {DeputiesList} from "../components/legislative/DeputiesList";

export const LegislativeDeputiesView: React.FC = () => {

  return (
    <Container className="text-black text-center py-3">
      <Grid item md={10} lg={8} className="mx-auto pb-4">
        <h2 className="display-3 px-4 font-weight-bold">
          Diputadas y Diputados
        </h2>
        <p className="font-size-xl mt-3 mb-0 text-black-50">
          Sus funciones abarcan tanto la legislación (en conjunto con el Senado y el Presidente de la República) como la
          fiscalización de los actos del Gobierno
        </p>
      </Grid>
      <DeputiesList/>
    </Container>
  )
}
