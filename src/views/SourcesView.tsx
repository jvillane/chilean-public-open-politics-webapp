import React from "react";
import {Card, CardContent, Container, Divider, Grid, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Rating} from "@material-ui/lab";

export const SourcesView: React.FC = () => {
  return (
    <div className="py-2">
      <Container>
        <div className="mb-4 text-center">
          <h4 className="font-weight-bold text-second display-2">
            Orígenes de la Información
          </h4>
          <Grid item md={11} lg={10} className="mx-auto">

          </Grid>
        </div>
        <Grid container direction="row" justify="space-around" alignItems="center" className="mb-4">
          <Grid item lg={5} className="align-items-center h-100">
            <p className="text-center text-second opacity-6 mt-3 mb-1 font-size-xl">
              Nos hemos preocupado de obtener la información desde fuentes oficiales, con el objetivo de que se puedan
              construir análisis y cruces de información confiables
            </p>
          </Grid>
          <Grid item lg={7}>
            <Card className="m-4">
              <CardContent>
                <div className="align-box-row align-items-start">
                  <div className="pl-2">
                    <FontAwesomeIcon icon={['fas', 'quote-right']} className="text-primary font-size-xxl"/>
                    <blockquote className="mt-3 mb-2 text-black-50">
                      Queremos acercar a la ciudadanía la información que hoy se encuentra repartida en diferentes
                      instituciones y formatos, y entregarla sin interpretaciones y lo más depurada posible
                    </blockquote>
                    <div className="font-size-lg font-weight-bold">
                      el equipo Open-Data.CL
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div className="text-center mb-3">
          <h1 className="display-4 font-weight-bold mb-0 mt-5">
            Cámara de Diputadas y Diputados
          </h1>
          <Typography variant="subtitle1" gutterBottom className="text-black-50">
            Datos Abiertos Legislativos
          </Typography>
        </div>
        <Grid container spacing={4} direction="row" justify="space-around" alignItems="center" className="mb-4">
          <Grid item lg={6} className="align-items-center h-100">
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">URL</div>
              <div className="text-black-50 text-center font-size-md">
                www.camara.cl/transparencia
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">Formato</div>
              <div className="text-black-50 text-center font-size-md">
                XML
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">Evaluación</div>
              <div className="text-black-50 text-center font-size-md">
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} className="align-items-center h-100">
            <Card>
              <CardContent className="text-first mt-3">
                <Grid container spacing={4}>
                  <Grid item md={6}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Períodos Parlamentarios</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Información Diputados</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Proyectos de Ley</span>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Votaciones</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Asistencia a Sesiones</span>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider className="my-5"/>

        <div className="text-center mb-3">
          <h1 className="display-4 font-weight-bold mb-0">
            Senado
          </h1>
          <Typography variant="subtitle1" gutterBottom className="text-black-50 mb-0">
            Datos Abiertos Legislativos
          </Typography>
        </div>
        <Grid container spacing={4} direction="row" justify="space-around" alignItems="center" className="mb-4">
          <Grid item lg={6} className="align-items-center h-100">
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">URL</div>
              <div className="text-black-50 text-center font-size-md">
                opendata.camara.cl
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">Formato</div>
              <div className="text-black-50 text-center font-size-md">
                XML
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">Evaluación</div>
              <div className="text-black-50 text-center font-size-md">
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} className="align-items-center h-100">
            <Card>
              <CardContent className="text-first mt-3">
                <Grid container spacing={4}>
                  <Grid item md={6}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Proyectos de Ley</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Información Senadores</span>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Votaciones</span>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider className="my-5"/>

        <div className="text-center mb-3">
          <h1 className="display-4 font-weight-bold mb-0">
            Servicio Electoral de Chile
          </h1>
        </div>
        <Grid container spacing={4} direction="row" justify="space-around" alignItems="center" className="mb-4">
          <Grid item lg={6} className="align-items-center h-100">
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">URL</div>
              <div className="text-black-50 text-center font-size-md">
                www.servel.cl
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">Formato</div>
              <div className="text-black-50 text-center font-size-md">
                PDF / XLSX
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="font-size-md font-weight-bold">Evaluación</div>
              <div className="text-black-50 text-center font-size-md">
                <Rating name="half-rating-read" defaultValue={1.5} precision={0.5} readOnly />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} className="align-items-center h-100">
            <Card>
              <CardContent className="text-first mt-3">
                <Grid container spacing={4}>
                  <Grid item md={6}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Partidos Políticos</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Militancias Políticas</span>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']}/>
                      </div>
                      <span className="pt-1">Elecciones</span>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
