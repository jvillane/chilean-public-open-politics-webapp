import React, {useEffect, useState} from "react";
import {Card, CardContent, Container, Divider, Grid} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getDeputies} from "../services/deputies.service";
import {getSenators} from "../services/senators.service";
import CountUp from "react-countup";

interface State {
  deputiesNumber: number
  senatorsNumber: number
}

export const HomeView: React.FC = () => {
  const [state, setState] = useState<State>();

  useEffect(() => {
    let _mounted = true;
    Promise.all([getDeputies(), getSenators()])
      .then(result => {
        if (_mounted)
          setState({
            deputiesNumber: Object.keys(result[0]).length,
            senatorsNumber: Object.keys(result[1]).length,
          })
      })
    return () => {
      _mounted = false;
    };
  })

  return (
    <div className="py-2">
      <Container className="pb-3">
        <div className="mb-4 text-center">
          <h4 className="font-weight-bold text-second display-2">
            Poder Legislativo
          </h4>
          <Grid item md={11} lg={10} className="mx-auto">
            <p className="text-second opacity-6 mt-3 mb-1 font-size-xl">
              El Poder Legislativo en Chile tiene una estructura bicameral, es decir, está compuesto por la
              Cámara de Diputados y el Senado, y cuyas labores se realizan en el <b>Congreso Nacional</b>
            </p>
            <p className="text-second opacity-4 mt-1 mb-5 font-size-md">
              Entre sus principales objetivos podemos nombrar el ejercer la representación de la ciudadanía, concurrir a
              la formación de las leyes conjuntamente con el Presidente de la República y, en el caso de la Cámara de
              Diputados, fiscalizar los actos del Gobierno
            </p>
          </Grid>
        </div>
        <Grid container spacing={5} className="mb-3">
          <Grid item md={6}>
            <Card className="card-border-top border-info">
              <CardContent className="camara-resumen">
                <h3 className="font-size-xl font-weight-bold mb-4 text-info">
                  Cámara de Diputados
                </h3>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2 text-info">
                      <FontAwesomeIcon icon={['fas', 'angle-right']}/>
                    </div>
                    <span className="pt-1">
                      <span className="font-weight-bolder text-info">
                        <CountUp start={0} end={state ? state.deputiesNumber : 0} duration={4} delay={1} separator=""
                                 decimals={0} decimal=","/> miembros
                      </span> en cámara
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2 text-info">
                      <FontAwesomeIcon icon={['fas', 'angle-right']}/>
                    </div>
                    <span className="pt-1">
                      <span className="font-weight-bolder text-info">
                        <CountUp start={0} end={4} duration={4} delay={1} separator="" decimals={0} decimal=","/> años
                      </span> de duración del cargo
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2 text-info">
                      <FontAwesomeIcon icon={['fas', 'angle-right']}/>
                    </div>
                    <span className="pt-1">
                      Representan un <span className="font-weight-bolder text-info">Distrito</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-info mr-2 text-info">
                      <FontAwesomeIcon icon={['fas', 'angle-right']}/>
                    </div>
                    <span className="pt-1">
                      En su portal, la información oficial indica que perciben una dieta mensual líquida de <span className="font-weight-bolder text-info">
                      $ <CountUp start={0} end={6848420} duration={2} delay={0} separator="." decimals={0} decimal=","/>
                    </span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card className="card-border-top border-warning">
              <CardContent className="camara-resumen">
                <h3 className="font-size-xl font-weight-bold mb-4 text-warning">
                  Senado
                </h3>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-warning mr-2 text-warning">
                      <FontAwesomeIcon icon={['fas', 'angle-right']}/>
                    </div>
                    <span className="pt-1">
                      <span className="font-weight-bolder text-warning">
                        <CountUp start={0} end={state ? state.senatorsNumber : 0} duration={4} delay={1} separator=""
                                 decimals={0} decimal=","/> miembros
                      </span> en cámara
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-warning mr-2 text-warning">
                      <FontAwesomeIcon icon={['fas', 'angle-right']}/>
                    </div>
                    <span className="pt-1">
                      <span className="font-weight-bolder text-warning">
                        <CountUp start={0} end={8} duration={4} delay={1} separator="" decimals={0} decimal=","/> años
                      </span> de duración del cargo
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-warning mr-2 text-warning">
                      <FontAwesomeIcon icon={['fas', 'angle-right']}/>
                    </div>
                    <span className="pt-1">
                      Representan una <span className="font-weight-bolder text-warning">Circunscripción</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-warning mr-2 text-warning">
                      <FontAwesomeIcon icon={['fas', 'angle-right']}/>
                    </div>
                    <span className="pt-1">
                      En su portal, la información oficial indica que perciben una dieta mensual bruta de <span className="font-weight-bolder text-warning">
                      $ <CountUp start={0} end={9349851} duration={2} delay={0} separator="." decimals={0} decimal=","/>
                    </span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Divider variant="middle" className="my-5"/>
        <div className="my-4 text-center">
          <h5 className="font-weight-bold text-second display-3">
            Privilegios Parlamentarios
          </h5>
        </div>
        <Grid container spacing={0} className="w-100 mb-3 mb-xl-0">
          <Grid item lg={4}>
            <div className="feature-box px-4 text-center">
              <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                Fuero Parlamentario
              </h3>
              <p className="opacity-4 mb-3">
                El fuero parlamentario, que es un beneficio de índole puramente procesal que permite que un Diputado o
                Senador, desde el día de su elección, designación o incorporación, <b className="text-black">no pueda
                ser procesado o privado
                instantáneamente de su libertad</b>, sin que antes exista un pronunciamiento de la Corte de Apelaciones
                respectiva, a menos que se trate de un delito flagrante.
              </p>
              <p className="opacity-4 mb-3">
                Si un parlamentario es desaforado queda
                suspendido de su cargo y sujeto al juez competente como cualquier otro ciudadano
              </p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="feature-box px-4 text-center">
              <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                Inviolabilidad Parlamentaria
              </h3>
              <p className="opacity-4 mb-3">
                Es una excepción al principio de igualdad ante la ley que hace que los Senadores y Diputados <b
                className="text-black">sean
                inviolables por las opiniones y votos que emiten</b> tanto en las sesiones de sala como en las
                comisiones,
                resguardando de esa manera la libertad de expresión en los cuerpos legislativos
              </p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="feature-box px-4 text-center">
              <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                Dieta Parlamentaria
              </h3>
              <p className="opacity-4 mb-3">
                Constituye la remuneración que los Senadores y Diputado perciben mensualmente, que es equivalente al
                sueldo de un Ministro de Estado, incluidas todas las asignaciones que a éstos corresponden.
              </p>
              <p className="opacity-4 mb-3">
                Se introdujo
                con el avance de la democracia para permitir la participación en las cámaras de personas que no
                disfrutan de una posición patrimonial cómoda, y <b className="text-black">para compensar la consagración
                de tiempo y esfuerzo a la actividad parlamentaria</b>
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
