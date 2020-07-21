import React from "react";
import {Partido} from "../../../services/parties.model";

interface Props {
  start?: boolean
  baja?: boolean
  name: string
  party?: Partido
}

export const TimelineLapse: React.FC<Props> = ({start, baja, name, party}) => {

  return (
    <div>
      {start ? 'Inicia' : 'Finaliza'} período {name} en Cámara {baja ? 'Baja' : 'Alta'}{party && <>, bancada <b>{party.Nombre}</b></>}
    </div>
  )
}
