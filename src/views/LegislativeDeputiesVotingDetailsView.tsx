import React, {useEffect, useState} from "react";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import {Votacion} from "../services/deputies.model";
import {useParams} from "react-router";
import {getVoting} from "../services/deputies.service";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup';
import Avatar from "react-avatar";
import {CircularProgressbar} from 'react-circular-progressbar';

interface Params {
  year: string
  id: string
}

interface ResultsFilterState {
  yes: boolean
  no: boolean
  abstention: boolean
  dispensed: boolean
}

export const LegislativeDeputiesVotingDetailsView: React.FC = () => {
  const {year, id} = useParams<Params>();
  const [voting, setVoting] = useState<Votacion>();
  const [resultFilter, setResultFilter] = useState<ResultsFilterState>({
    yes: true,
    no: true,
    abstention: true,
    dispensed: true
  })

  useEffect(() => {
    setVoting(undefined);
    getVoting(year, id)
      .then(voting => setVoting(voting));
  }, [year, id])

  return (
    <Container className="py-2">
      <Card className="card-box mb-4">
        <Grid container spacing={0}>
          <Grid item md={6} lg={4} className="p-4">
            {voting && (
              <>
                <div className="divider-v divider-v-lg"/>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <b>Fecha</b>
                  </div>
                  <div className="text-black-50 text-center">
                    {moment(voting.Fecha).format('DD-MMM-YYYY hh:mm')}
                    <div className="text-info font-size-sm">
                      {moment(voting.Fecha).fromNow()}
                    </div>
                  </div>
                </div>
                <div className="divider my-3"/>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <b>Tipo</b>
                  </div>
                  <div className="text-black-50">
                    {voting.Tipo.Valor}
                  </div>
                </div>
                {voting.Resultado && (
                  <>
                    <div className="divider my-3"/>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <b>Resultado</b>
                      </div>
                      <div className="text-black-50">
                        {voting.Resultado.Valor}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </Grid>
          <Grid item md={6} lg={8} className="p-4">
            <div className="divider-v divider-v-lg"/>
            {voting && (
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <b>Descripción</b>
                  <div className="text-black-50 mt-2">{voting.Descripcion}</div>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Card className="card-box">
            <CardHeader title="Votación"/>
            <hr className="m-0"/>
            <List className="list-group-flush">
              <ListItem button className={"py-3 d-block " + (resultFilter.yes ? '' : 'bg-gray-200')}
                        onClick={() => setResultFilter({...resultFilter, yes: !resultFilter.yes})}>
                <div className="d-flex align-items-center flex-column flex-sm-row">
                  <div>
                    <Button
                      size="small"
                      variant="text"
                      className={"btn-animated-icon d-30 btn-pill p-0 btn-icon " + (resultFilter.yes ? 'btn-success' : 'btn-neutral-success')}>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </span>
                    </Button>
                  </div>
                  <div className="pl-0 pl-sm-3">
                    <div className="d-block text-center d-sm-flex align-items-center">
                      <span className="font-size-lg text-black-50">Si</span>
                    </div>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto text-success">
                    <CountUp start={0} end={75} duration={4} delay={2} separator="" decimals={0} decimal=","/>
                  </div>
                </div>
              </ListItem>
              <ListItem button className={"py-3 d-block " + (resultFilter.no ? '' : 'bg-gray-200')}
                        onClick={() => setResultFilter({...resultFilter, no: !resultFilter.no})}>
                <div className="d-flex align-items-center flex-column flex-sm-row">
                  <div>
                    <Button
                      size="small"
                      variant="text"
                      className={"btnbtn-animated-icon d-30 btn-pill p-0 btn-icon " + (resultFilter.no ? 'btn-danger' : 'btn-neutral-danger')}>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'times']}/>
                      </span>
                    </Button>
                  </div>
                  <div className="pl-0 pl-sm-3">
                    <div className="d-block text-center d-sm-flex align-items-center">
                      <span className="font-size-lg text-black-50">No</span>
                    </div>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto text-danger">
                    <CountUp start={0} end={12} duration={4} delay={2} separator="" decimals={0} decimal=","/>
                  </div>
                </div>
              </ListItem>
              <ListItem button className={"py-3 d-block " + (resultFilter.abstention ? '' : 'bg-gray-200')}
                        onClick={() => setResultFilter({...resultFilter, abstention: !resultFilter.abstention})}>
                <div className="d-flex align-items-center flex-column flex-sm-row">
                  <div>
                    <Button
                      size="small"
                      variant="text"
                      className={"btn-animated-icon d-30 btn-pill p-0 btn-icon " + (resultFilter.abstention ? 'btn-warning' : 'btn-neutral-warning')}>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'ban']}/>
                      </span>
                    </Button>
                  </div>
                  <div className="pl-0 pl-sm-3">
                    <div className="d-block text-center d-sm-flex align-items-center">
                      <span className="font-size-lg text-black-50">Abstencion</span>
                    </div>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto text-warning">
                    <CountUp start={0} end={12} duration={4} delay={2} separator="" decimals={0} decimal=","/>
                  </div>
                </div>
              </ListItem>
              <ListItem button className={"py-3 d-block " + (resultFilter.dispensed ? '' : 'bg-gray-200')}
                        onClick={() => setResultFilter({...resultFilter, dispensed: !resultFilter.dispensed})}>
                <div className="d-flex align-items-center flex-column flex-sm-row">
                  <div>
                    <Button
                      size="small"
                      variant="text"
                      className={"btn-animated-icon d-30 btn-pill p-0 btn-icon " + (resultFilter.dispensed ? 'btn-dark' : 'btn-neutral-dark')}>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'ban']}/>
                      </span>
                    </Button>
                  </div>
                  <div className="pl-0 pl-sm-3">
                    <div className="d-block text-center d-sm-flex align-items-center">
                      <span className="font-size-lg text-black-50">Dispensado</span>
                    </div>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto text-dark">
                    <CountUp start={0} end={3} duration={4} delay={2} separator="" decimals={0} decimal=","/>
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item sm={8}>
          <Card className="card-box">
            <CardContent>
              <Grid container direction="row" alignItems="center" justify="space-between" className="mb-3">
                <div>
                  <Grid container direction="row" alignItems="center" justify="flex-start">
                    <div className="avatar-icon-wrapper m-0 mr-2 d-50">
                      <Avatar color="blue" value="UDI" className="rounded" size="50px"/>
                    </div>
                    <div className="font-size-lg font-weight-bold p-0">
                      Unión Demócrata Independiente
                    </div>
                  </Grid>
                </div>
                <div className="font-size-md p-0 text-black-50">
                  24 miembros
                </div>
              </Grid>
              <Divider className="my-3"/>
              <Grid container spacing={1}>
                <Grid item xs={6} md={3} className="text-center">
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <CircularProgressbar
                      value={12} maxValue={24} text="50%" strokeWidth={6}
                      className="circular-progress-success circular-progress-xs mr-2"/>
                    <Typography className="text-black-50" variant="body1">
                      10 <FontAwesomeIcon icon={['fas', 'male']}/> | 2 <FontAwesomeIcon icon={['fas', 'female']}/>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3} className="text-center">
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <CircularProgressbar
                      value={8} maxValue={24} text="33%" strokeWidth={6}
                      className="circular-progress-danger circular-progress-xs mr-2"/>
                    <Typography className="text-black-50" variant="body1">
                      7 <FontAwesomeIcon icon={['fas', 'male']}/> | 1 <FontAwesomeIcon icon={['fas', 'female']}/>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3} className="text-center">
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <CircularProgressbar
                      value={3} maxValue={24} text="13%" strokeWidth={6}
                      className="circular-progress-warning circular-progress-xs mr-2"/>
                    <Typography className="text-black-50" variant="body1">
                      3 <FontAwesomeIcon icon={['fas', 'female']}/>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3} className="text-center">
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <CircularProgressbar
                      value={1} maxValue={24} text="4%" strokeWidth={6}
                      className="circular-progress-dark circular-progress-xs mr-2"/>
                    <Typography className="text-black-50" variant="body1">
                      1 <FontAwesomeIcon icon={['fas', 'male']}/>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
