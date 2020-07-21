import React, {useEffect} from "react";

import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  Grid,
  Hidden,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';
import moment from "moment";
import {DeputiesVotingsByYear} from "../components/legislative/DeputiesVotingsByYear";
import {useHistory, useParams} from "react-router";

interface Params {
  year: string
  month: string
}

const MIN_YEAR = 2018;
const MIN_MONTH = 3;
const MONTH_NAMES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export const LegislativeDeputiesVotingView: React.FC = () => {
  const {year, month} = useParams<Params>();
  const today = moment();
  const nowYear = +today.get('year');
  const nowMonth = +today.get('month');
  const history = useHistory();
  const years = Array.from(Array(nowYear - MIN_YEAR + 1), (_, i) => MIN_YEAR + i)

  const setYearMonth = (year: number | string, month: number | string) => {
    history.replace(`/diputados/votaciones/${year}/${month}`)
  }

  useEffect(() => {
    if (year === undefined || month === undefined) {
      setYearMonth(nowYear, nowMonth);
    } else if (+year < MIN_YEAR || (+year === MIN_YEAR && +month < MIN_MONTH) || !Number.isInteger(+year) || !Number.isInteger(+month)) {
      setYearMonth(MIN_YEAR, MIN_MONTH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month]);

  return (
    <Container className="text-black text-center py-5">
      <Grid item md={10} lg={8} className="mx-auto pb-4">
        <h2 className="display-3 px-4 font-weight-bold">
          Votaciones Cámara Baja
        </h2>
        <p className="font-size-xl mt-3 mb-0 text-black-50">
          A continuación el listado de votaciones realizadas por las Diputadas y Diputados en el período <b
          className="text-info">2018 - 2022</b>
        </p>
      </Grid>
      <Grid container spacing={4} className="mb-3">
        <Grid item md={3}>
          <ButtonGroup variant="outlined" color="secondary" aria-label="Mes" fullWidth>
            {years.map(aYear => {
              return (
                <Button key={`year_${aYear}`} value={aYear} aria-label={`Año ${aYear}`}
                        variant={aYear === Number(year) ? "contained" : "outlined"}
                        onClick={() => setYearMonth(aYear, month)}>{aYear}</Button>
              );
            })}
          </ButtonGroup>
        </Grid>
        <Grid item md={9}>
          <Hidden mdUp>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor='sm-select'>Mes</InputLabel>
              <Select id="sm-select" value={+month} label="Mes" fullWidth color="secondary"
                      onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                        setYearMonth(year, event.target.value as string);
                      }}>
                {MONTH_NAMES.map((name, index) => {
                  if (+year === MIN_YEAR && index + 1 < MIN_MONTH) {
                    return null;
                  } else if (+year === nowYear && index > nowMonth) {
                    return null;
                  }
                  return (
                    <MenuItem key={index} value={index + 1}>{name}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Hidden>
          <Hidden smDown>
            <ButtonGroup variant="outlined" color="secondary" aria-label="Mes" fullWidth>
              {MONTH_NAMES.map((name, index) => {
                return (
                  <Button key={`month_${index + 1}`} aria-label={name}
                          variant={index + 1 === +month ? "contained" : "outlined"}
                          onClick={() => setYearMonth(year, index + 1)}
                          disabled={(+year === MIN_YEAR && index + 1 < MIN_MONTH) || (+year === nowYear && index > nowMonth)}>
                    {name.substring(0,3)}
                  </Button>
                );
              })}
            </ButtonGroup>
          </Hidden>
        </Grid>
      </Grid>
      {year && month && (<DeputiesVotingsByYear year={+year} month={+month - 1}/>)}
    </Container>
  )
}
