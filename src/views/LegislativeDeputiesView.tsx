import React, {useEffect, useState} from "react";

import {Container, Grid} from '@material-ui/core';
import {getLapses} from "../services/deputies.service";
import {Periodo} from "../services/deputies.model";
import {DeputiesLapse} from "../components/legislative/DeputiesLapse";

export const LegislativeDeputiesView: React.FC = () => {
  const [lapse, setLapse] = useState<Periodo>();

  useEffect(() => {
    getLapses()
      .then(lapses => {
        setLapse(
          Object.values(lapses)
            .reduce((l1, l2) => l1.Nombre.localeCompare(l2.Nombre) > 0 ? l1 : l2))
      });
  }, []);

  return (
    <Container className="text-black text-center py-5">
      <Grid item md={10} lg={8} className="mx-auto pb-4">
        <h2 className="display-3 px-4 font-weight-bold">
          Integrantes
        </h2>
        <p className="font-size-xl mt-3 mb-0 text-black-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo incidunt quam quasi. Aliquid beatae
          distinctio hic illum iste libero minima repellendus similique. A excepturi maiores numquam, obcaecati sunt
          voluptatibus.
        </p>
      </Grid>
      <DeputiesLapse lapse={lapse}/>
    </Container>
  )
}
