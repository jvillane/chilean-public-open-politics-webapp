import React, {useEffect, useState} from "react";

import {Button, Container, Grid} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {getLapses} from "../services/deputies.service";
import {Periodo, Periodos} from "../services/deputies.model";
import {DeputiesLapse} from "../components/legislative/DeputiesLapse";
import {useToggle} from "react-use";

export const LegislativeDeputiesView: React.FC = () => {
  const [lapse, setLapse] = useState<Periodo>();
  const [lapses, setLapses] = useState<Periodos>();
  const [all, toggle] = useToggle(false);

  useEffect(() => {
    getLapses()
      .then(lapses => {
        setLapse(
          Object.values(lapses)
            .reduce((l1, l2) => l1.Nombre.localeCompare(l2.Nombre) > 0 ? l1 : l2))
        setLapses(lapses);
      });
  }, []);

  return (
    <Container className="text-black text-center py-5">
      <Grid item md={10} lg={8} className="mx-auto pb-4">
        <h2 className="display-3 px-4 font-weight-bold">
          Poder Legislativo - Diputad@s
        </h2>
        <p className="font-size-xl mt-3 mb-0 text-black-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo incidunt quam quasi. Aliquid beatae
          distinctio hic illum iste libero minima repellendus similique. A excepturi maiores numquam, obcaecati sunt
          voluptatibus.
        </p>
      </Grid>
      <div className="pb-5">
        <Button size="large" className={"btn-pill " + (all ? "btn-neutral-first" : "btn-first shadow-second-sm")}
                onClick={() => toggle(false)}>
          <span className="btn-wrapper--label">Por Periodo</span>
        </Button>
        <Button size="large" className={"btn-pill ml-3 " + (!all ? "btn-neutral-first" : "btn-first shadow-second-sm")}
                onClick={() => toggle(true)}>
          <span>Todos</span>
        </Button>
      </div>
      {all && (
        <DeputiesLapse/>
      )}
      {!all && (
        <Grid container spacing={2}>
          <Grid item xs={4} sm={3}>
            {lapses && (
              <Tabs orientation="vertical" variant="scrollable"
                    onChange={(event: React.ChangeEvent<{}>, newValue: Periodo) => {
                      setLapse(newValue);
                    }}
                    value={lapse}>
                {Object.keys(lapses)
                  .sort((key1, key2) => {
                    return lapses[key2].Nombre.localeCompare(lapses[key1].Nombre)
                  })
                  .map(key => {
                    return (
                      <Tab key={key} label={lapses[key].Nombre} value={lapses[key]}/>
                    )
                  })}
              </Tabs>
            )}
          </Grid>
          <Grid item xs={8} sm={9}>
            {lapse && (
              <DeputiesLapse lapse={lapse}/>
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  )
}
