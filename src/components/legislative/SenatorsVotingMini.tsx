import React from "react";
import {Button, Card, Grid, Tooltip, Typography} from "@material-ui/core";
import {Votacion} from "../../services/senators.model";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
import ClampLines from "react-clamp-lines/lib";
import {useHistory} from "react-router";
import CountUp from "react-countup";

interface Props {
  id: string
  voting: Votacion
}

export const SenatorsVotingMini: React.FC<Props> = ({id, voting}) => {
  const date = moment(voting.Fecha).tz('America/Santiago');
  const history = useHistory();

  return (
    <Card className="card-box p-4 clickable"
          onClick={() => history.push(`/senadores/votacion/${id}`)}>
      <div className="text-center">
        <div>
          <b>{date.format('DD-MMM-YYYY')}</b>
          <Typography className="text-info" variant="subtitle2">{voting.Tipo}</Typography>
        </div>
      </div>
      <div className="divider mx-auto my-3 w-100"/>
      {voting.Tema && (
        <Tooltip title={voting.Tema} arrow interactive>
          <div className="text-center text-black-50">
            <ClampLines text={voting.Tema} id={`desc_${id}`} buttons={false}
                        lines={4} moreText="Ver más" lessText="Ver menos"/>
          </div>
        </Tooltip>
      )}
      <div className="divider mx-auto my-3 w-100"/>
      <Grid container spacing={3} className="text-center">
        <Grid item sm={4} className="text-center">
          <Button size="small" variant="text"
                  className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-success">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'check']}/>
                        </span>
          </Button>
          <div className="display-5 line-height-sm font-weight-light text-success">
            <CountUp start={0} end={voting.Resultado.Si} duration={4} delay={2} separator="" decimals={0} decimal=","/>
          </div>
        </Grid>
        <Grid item sm={4} className="text-center">
          <Button size="small" variant="text"
                  className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-danger">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'times']}/>
                        </span>
          </Button>
          <div className="display-5 line-height-sm font-weight-light text-danger">
            <CountUp start={0} end={voting.Resultado.No} duration={4} delay={2} separator="" decimals={0} decimal=","/>
          </div>
        </Grid>
        <Grid item sm={4} className="text-center">
          <Button size="small" variant="text"
                  className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-warning">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'hand-paper']}/>
                        </span>
          </Button>
          <div className="display-5 line-height-sm font-weight-light text-warning">
            <CountUp start={0} end={voting.Resultado.Abstencion} duration={4} delay={2} separator="" decimals={0} decimal=","/>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}
