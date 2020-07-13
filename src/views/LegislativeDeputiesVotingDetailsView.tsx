import React, {useEffect, useState} from "react";

import {Button, Card, CardHeader, Container, Grid, List, ListItem} from '@material-ui/core';
import {Votacion} from "../services/deputies.model";
import {useParams} from "react-router";
import {getVoting} from "../services/deputies.service";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup';
import {DeputiesVotingParties} from "../components/legislative/DeputiesVotingParties";

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
              <ListItem button className={"py-2 d-block " + (resultFilter.yes ? '' : 'bg-gray-200')}
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
                      <span className="font-size-md text-black-50">Si</span>
                    </div>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto text-success">
                    <CountUp start={0} end={75} duration={4} delay={2} separator="" decimals={0} decimal=","/>
                  </div>
                </div>
              </ListItem>
              <ListItem button className={"py-2 d-block " + (resultFilter.no ? '' : 'bg-gray-200')}
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
                      <span className="font-size-md text-black-50">No</span>
                    </div>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto text-danger">
                    <CountUp start={0} end={12} duration={4} delay={2} separator="" decimals={0} decimal=","/>
                  </div>
                </div>
              </ListItem>
              <ListItem button className={"py-2 d-block " + (resultFilter.abstention ? '' : 'bg-gray-200')}
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
                      <span className="font-size-md text-black-50">Abstencion</span>
                    </div>
                  </div>
                  <div className="mt-3 mt-sm-0 ml-sm-auto text-warning">
                    <CountUp start={0} end={12} duration={4} delay={2} separator="" decimals={0} decimal=","/>
                  </div>
                </div>
              </ListItem>
              <ListItem button className={"py-2 d-block " + (resultFilter.dispensed ? '' : 'bg-gray-200')}
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
                      <span className="font-size-md text-black-50">Dispensado</span>
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
          {voting && (
            <DeputiesVotingParties voting={voting}/>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}
