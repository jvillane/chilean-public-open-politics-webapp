import React from "react";
import {Button, Card, Grid, Tooltip, Typography} from "@material-ui/core";
import {Votacion} from "../../services/deputies.model";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
import ClampLines from "react-clamp-lines/lib";
import {useHistory} from "react-router";
import CountUp from "react-countup";

interface Props {
  id: string
  voting: Votacion
}

export const DeputiesVotingMini: React.FC<Props> = ({id, voting}) => {
  const date = moment(voting.Fecha).tz('America/Santiago');
  const history = useHistory();

  return (
    <Card className="card-box p-4 clickable"
          onClick={() => history.push(`/diputados/votacion/${date.get('year')}/${id}`)}>
      <div className="text-center">
        <div>
          <b>{date.format('DD-MMM-YYYY')}</b> <small>({date.format('HH:mm a')})</small>
          <Typography className="text-info" variant="subtitle2">{voting.Tipo.Valor}</Typography>
        </div>
      </div>
      <div className="divider mx-auto my-3 w-100"/>
      {voting.ProyectoLeyNombre && (
        <Tooltip title={voting.ProyectoLeyNombre} arrow interactive>
          <div className="text-center text-black-50">
            <ClampLines text={voting.ProyectoLeyNombre} id={`desc_${id}`} buttons={false}
                        lines={4} moreText="Ver más" lessText="Ver menos"/>
          </div>
        </Tooltip>
      )}
      {!voting.ProyectoLeyNombre && (
        <Tooltip title={voting.Descripcion} arrow interactive>
          <div className="text-center text-black-50">
            <ClampLines text={voting.Descripcion} id={`desc_${id}`} buttons={false}
                        lines={4} moreText="Ver más" lessText="Ver menos"/>
          </div>
        </Tooltip>
      )}
      <div className="divider mx-auto my-3 w-100"/>
      <Grid container spacing={3} className="text-center">
        <Grid item xs={4} className="text-center">
          <Button size="small" variant="text"
                  className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-success">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'check']}/>
                        </span>
          </Button>
          <div className="display-5 line-height-sm font-weight-light text-success">
            <CountUp start={0} end={voting.Total.Si} duration={4} delay={2} separator="" decimals={0} decimal=","/>
          </div>
        </Grid>
        <Grid item xs={4} className="text-center">
          <Button size="small" variant="text"
                  className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-danger">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'times']}/>
                        </span>
          </Button>
          <div className="display-5 line-height-sm font-weight-light text-danger">
            <CountUp start={0} end={voting.Total.No} duration={4} delay={2} separator="" decimals={0} decimal=","/>
          </div>
        </Grid>
        <Grid item xs={4} className="text-center">
          <Button size="small" variant="text"
                  className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-warning">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'hand-paper']}/>
                        </span>
          </Button>
          <div className="display-5 line-height-sm font-weight-light text-warning">
            <CountUp start={0} end={voting.Total.Abstencion} duration={4} delay={2} separator="" decimals={0} decimal=","/>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}
