import React from "react";
import {Card, Grid, Tooltip} from "@material-ui/core";
import {Votacion} from "../../services/deputies.model";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
import ClampLines from "react-clamp-lines/lib";
import {useHistory} from "react-router";

interface Props {
  id: string
  voting: Votacion
}

export const DeputiesVotingMini: React.FC<Props> = ({id, voting}) => {
  const date = moment(voting.Fecha);
  const history = useHistory();

  return (
    <Card className="card-box p-4 clickable"
          onClick={() => history.push(`/legislativo/camara/votacion/${date.get('year')}/${id}`)}>
      <div className="text-center">
        <div>
          <b>{date.format('DD-MMM-YYYY')}</b> <small>({date.format('HH:mm')})</small>
          <span className="text-black-50 d-block">{voting.Tipo.Valor}</span>
        </div>
      </div>
      <div className="divider mx-auto my-3 w-100"/>
      <Tooltip title={voting.Descripcion} arrow interactive>
        <div className="text-center">
          <ClampLines text={voting.Descripcion} id={`desc_${id}`} buttons={false}
                      lines={3} moreText="Ver más" lessText="Ver menos"/>
        </div>
      </Tooltip>
      <div className="divider mx-auto my-3 w-100"/>
      {voting.Resultado && (
        <>
          <div className="text-center">
            <p>{voting.Resultado.Valor}</p>
          </div>
          <div className="divider mx-auto my-3 w-100"/>
        </>
      )}
      <Grid container spacing={3} className="text-center">
        <Grid item sm={4} className="text-center">
          <div className="text-black-50">
            <div className="badge rounded-circle badge-neutral-success text-success d-30 btn-icon p-0">
              <FontAwesomeIcon icon={['fas', 'check']}/>
            </div>
          </div>
          <b className="font-size-lg">{voting.Total.Si}</b>
        </Grid>
        <Grid item sm={4} className="text-center">
          <div className="text-black-50">
            <div className="badge rounded-circle badge-neutral-danger text-danger d-30 btn-icon p-0">
              <FontAwesomeIcon icon={['fas', 'times']}/>
            </div>
          </div>
          <b className="font-size-lg">{voting.Total.No}</b>
        </Grid>
        <Grid item sm={4} className="text-center">
          <div className="text-black-50">
            <div className="badge rounded-circle badge-neutral-second text-black-50 d-30 btn-icon p-0">
              <FontAwesomeIcon icon={['fas', 'minus-circle']}/>
            </div>
          </div>
          <b className="font-size-lg">{voting.Total.Abstencion}</b>
        </Grid>
      </Grid>
    </Card>
  )
}
