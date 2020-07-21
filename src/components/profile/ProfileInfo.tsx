import React from "react";
import {Avatar} from '@material-ui/core';
import FadeIn from 'react-fade-in';
import {BASE_URL} from "../../config";
import {FiguraPublica} from "../../services/profile.model";
import {Age} from "../Age";
import {Diputado} from "../../services/deputies.model";
import {Senador} from "../../services/senators.model";

interface Props {
  publicFigure: FiguraPublica
  deputy?: Diputado
  senator?: Senador
}

export const ProfileInfo: React.FC<Props> = ({publicFigure, deputy, senator}) => {
  return (
    <FadeIn transitionDuration={1000}>
      <div className="p-3 text-left">
        <Avatar variant="circle" alt={publicFigure.Nombre}
                src={`${BASE_URL}/img/avatar/${publicFigure.Id}.jpeg`} style={{height: "150px", width: "150px"}}/>
        <div className="font-weight-bold font-size-xl line-height-1 py-3">
          {publicFigure.Nombre}
        </div>
        <div className="pb-3 font-size-sm text-black-50">
          <Age born={publicFigure.Nacio}/>
        </div>
      </div>
    </FadeIn>
  )
}
