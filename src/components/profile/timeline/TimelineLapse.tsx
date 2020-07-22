import React from "react";
import {Partido} from "../../../services/parties.model";
import {Typography} from "@material-ui/core";

interface Props {
  start?: boolean
  baja?: boolean
  name: string
  party?: Partido
}

export const TimelineLapse: React.FC<Props> = ({start, baja, name, party}) => {

  return (
    <Typography variant="body2" className="text-black-50">
      {start ? 'Inicia' : 'Finaliza'} período <b>{name}</b> en Cámara {baja ? 'Baja' : 'Alta'}{party && <>, bancada <b>{party.Nombre}</b></>}
    </Typography>
  )
}
