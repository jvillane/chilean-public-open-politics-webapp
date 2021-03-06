import React from "react";

import {Container, Grid} from '@material-ui/core';

export const ExecutiveView: React.FC = () => {
  return (
    <Container className="text-black text-center py-5">
      <Grid item md={10} lg={8} className="mx-auto pb-4">
        <h2 className="display-3 px-4 font-weight-bold">
          Poder Ejecutivo
        </h2>
        <p className="font-size-xl mt-3 mb-0 text-black-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo incidunt quam quasi. Aliquid beatae distinctio hic illum iste libero minima repellendus similique. A excepturi maiores numquam, obcaecati sunt voluptatibus.
        </p>
      </Grid>
      <div className="divider mx-5 mt-4" />
    </Container>
  )
}
