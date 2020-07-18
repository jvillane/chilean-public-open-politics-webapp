import React, {useEffect, useState} from "react";

import {Button, Card, CardContent, Container, Divider, Grid, Hidden} from '@material-ui/core';
import {Votacion} from "../services/deputies.model";
import {useParams} from "react-router";
import {getVoting} from "../services/deputies.service";
import moment from "moment-timezone";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup';
import {DeputiesVotingParties} from "../components/legislative/DeputiesVotingParties";

interface Params {
  year: string
  id: string
}

export const LegislativeDeputiesVotingDetailsView: React.FC = () => {
  const {year, id} = useParams<Params>();
  const [voting, setVoting] = useState<Votacion>();

  useEffect(() => {
    setVoting(undefined);
    getVoting(year, id)
      .then(voting => setVoting(voting));
  }, [year, id])

  return (
    <Container>
      <Card className="card-box mb-4">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={5} lg={4}>
              {voting && (
                <>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="font-size-md">
                      <b>Fecha</b>
                    </div>
                    <div className="text-black-50 text-center font-size-md">
                      {moment.utc(voting.Fecha).tz('America/Santiago').format('DD-MMM-YYYY hh:mm a')}
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
                      <div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <b>Resultado</b>
                          </div>
                          <div className="text-black-50">
                            {voting.Resultado.Valor}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {voting.BoletinNumero && (
                    <>
                      <div className="divider my-3"/>
                      <div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <b>Boletín Nº</b>
                          </div>
                          <div className="text-black-50">
                            {voting.BoletinNumero}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </Grid>
            <Grid item md={7} lg={8}>
              {voting && voting.ProyectoLeyNombre && (
                <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                  <div>
                    <b>Proyecto de Ley</b>
                    <div className="text-black-50 mt-2">{voting.ProyectoLeyNombre}</div>
                  </div>
                  <div className="mt-4">
                    <b>Artículo</b>
                    <div className="text-black-50 mt-2">{voting.Articulo}</div>
                  </div>
                </Grid>
              )}
              {voting && !voting.ProyectoLeyNombre && (
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <b>Descripción</b>
                    <div className="text-black-50 mt-2">{voting.Descripcion}</div>
                  </div>
                </div>
              )}
            </Grid>
            <div className="divider-sm divider-md"/>
          </Grid>
        </CardContent>
      </Card>
      <Card className="card-box mb-4">
        <CardContent>
          {voting && (
            <Grid container spacing={3}>
              <Grid item md={6} lg={3}>
                <div className="divider-v divider-v-md"/>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <div>
                    <Button size="small" variant="text"
                            className="btn-animated-icon d-30 btn-pill p-0 btn-icon btn-success">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'check']}/>
                        </span>
                    </Button>
                    <span className="font-size-md text-black-50 pl-3">A Favor</span>
                  </div>
                  <div className="display-4 line-height-1 font-weight-bold text-success">
                    <CountUp start={0} end={voting.Total.Si} duration={4} delay={2} separator="" decimals={0}
                             decimal=","/>
                  </div>
                </Grid>
              </Grid>
              <Grid item md={6} lg={3}>
                <div className="divider-v divider-v-md"/>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <div>
                    <Button size="small" variant="text"
                            className="btn-animated-icon d-30 btn-pill p-0 btn-icon btn-danger">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'times']}/>
                        </span>
                    </Button>
                    <span className="font-size-md text-black-50 pl-3">En Contra</span>
                  </div>
                  <div className="display-4 line-height-1 font-weight-bold text-danger">
                    <CountUp start={0} end={voting.Total.No} duration={4} delay={2} separator="" decimals={0}
                             decimal=","/>
                  </div>
                </Grid>
              </Grid>
              <Grid item md={6} lg={3}>
                <Hidden mdDown>
                  <div className="divider-v divider-v-md"/>
                </Hidden>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <div>
                    <Button size="small" variant="text"
                            className="btn-animated-icon d-30 btn-pill p-0 btn-icon btn-warning">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'hand-paper']}/>
                        </span>
                    </Button>
                    <span className="font-size-md text-black-50 pl-3">Abstención</span>
                  </div>
                  <div className="display-4 line-height-1 font-weight-bold text-warning">
                    <CountUp start={0} end={voting.Total.Abstencion} duration={4} delay={2} separator="" decimals={0}
                             decimal=","/>
                  </div>
                </Grid>
              </Grid>
              <Grid item md={6} lg={3}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <div>
                    <Button size="small" variant="text"
                            className="btn-animated-icon d-30 btn-pill p-0 btn-icon btn-dark">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'ban']}/>
                        </span>
                    </Button>
                    <span className="font-size-md text-black-50 pl-3">Dispensado</span>
                  </div>
                  <div className="display-4 line-height-1 font-weight-bold text-dark">
                    <CountUp start={0} end={voting.Total.Dispensado} duration={4} delay={2} separator="" decimals={0}
                             decimal=","/>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
      {voting && (
        <DeputiesVotingParties voting={voting}/>
      )}
    </Container>
  )
}
