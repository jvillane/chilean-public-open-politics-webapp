import React, {useEffect, useState} from "react";
import {Diputados, Periodo} from "../../services/deputies.model";
import {getDeputies} from "../../services/deputies.service";
import {Grid} from "@material-ui/core";
import {DeputyListItem} from "./DeputyListItem";
import {getMedia} from "../../services/profile.service";
import moment from "moment";

interface Props {
  lapse?: Periodo
}

export const LapseDeputies: React.FC<Props> = ({lapse}) => {
  const [deputies, setDeputies] = useState<Diputados>();

  useEffect(() => {
    Promise.all([getDeputies(), getMedia()])
      .then(responses => setDeputies(responses[0]))
  }, [lapse]);

  const filterDeputies = (): Diputados | undefined => {
    if (lapse && deputies) {
      return Object.keys(deputies)
        .filter(key => deputies[key].Militancia
          .some(militancy =>
            moment(militancy.Inicio).isBetween(lapse.Inicio, lapse.Termino, 'day', '[]') ||
            moment(militancy.Termino).isBetween(lapse.Inicio, lapse.Termino, 'day', '[]')
          ))
        .reduce<Diputados>((result, key) => {
          return {...result, [key]: deputies[key]};
        }, {})
    } else {
      return deputies;
    }
  }

  const filteredDeputies = lapse ? filterDeputies() : deputies;

  return (
    <Grid container spacing={3}>
      {filteredDeputies && Object.keys(filteredDeputies).map(key => {
        return (
          <Grid item xs={6} sm={4} xl={3} key={key}>
            <DeputyListItem id={key} deputy={filteredDeputies[key]}/>
          </Grid>
        )
      })}
    </Grid>
  )
}
