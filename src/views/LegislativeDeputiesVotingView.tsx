import React, {useEffect, useState} from "react";

import {Card, CardContent, CardHeader, Container, Grid} from '@material-ui/core';
import moment, {Moment} from "moment";
import {DeputiesVotingsByYear} from "../components/legislative/DeputiesVotingsByYear";
import {DatePicker} from "@material-ui/pickers";
import {useHistory, useParams} from "react-router";

interface Params {
  year: string
  month: string
}

export const LegislativeDeputiesVotingView: React.FC = () => {
  const [date, setDate] = useState<Moment>(moment());
  const {year, month} = useParams<Params>();
  const history = useHistory();

  useEffect(() => {
    if(year === undefined || month === undefined) {
      const today = moment();
      history.replace(`/legislativo/camara/votaciones/${today.get('year')}/${today.get('month')}`)
    } else {
      setDate(moment({year: +year, month: +month, day: 1}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month]);

  return (
    <Container className="text-black text-center py-5">
      <Grid item md={10} lg={8} className="mx-auto pb-4">
        <h2 className="display-3 px-4 font-weight-bold">
          Poder Legislativo - Diputad@s - Votaciones
        </h2>
        <p className="font-size-xl mt-3 mb-0 text-black-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo incidunt quam quasi. Aliquid beatae
          distinctio hic illum iste libero minima repellendus similique. A excepturi maiores numquam, obcaecati sunt
          voluptatibus.
        </p>
      </Grid>
      <Grid container spacing={2} className="pt-5">
        <Grid item xs={5} sm={3}>
          <Card>
            <CardHeader title="Filtros"/>
            <CardContent>
              <DatePicker
                views={["year", "month"]}
                label="Año - Mes"
                minDate={new Date("2002-03-02")}
                maxDate={new Date()}
                value={date}
                onChange={date => setDate(date as Moment)}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} sm={9}>
          <DeputiesVotingsByYear year={date.get('year')} month={date.get('month')}/>
        </Grid>
      </Grid>
    </Container>
  )
}
