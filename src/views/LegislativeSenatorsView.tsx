import React from "react";

import {Container, Grid} from '@material-ui/core';
import {SenatorsList} from "../components/legislative/SenatorsList";

export const LegislativeSenatorsView: React.FC = () => {

  return (
    <Container className="text-black text-center py-5">
      <Grid item lg={10} className="mx-auto pb-4">
        <h2 className="display-3 px-4 font-weight-bold">
          Senadoras y Senadores
        </h2>
        <p className="font-size-xl mt-3 mb-0 text-black-50">
          Al Igual que la Cámara de Diputados, esta corporación cumple con la función legislativa. <br/>
          Asimismo, tiene atribuciones exclusivas, las que de acuerdo a lo dispuesto en el artículo 53 de la
          Constitución
        </p>
      </Grid>
      <SenatorsList/>
    </Container>
  )
}
