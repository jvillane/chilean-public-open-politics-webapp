import React from "react";
import {Avatar} from '@material-ui/core';
import FadeIn from 'react-fade-in';
import {BASE_URL} from "../../config";
import {FiguraPublica} from "../../services/profile.model";
import {Age} from "../Age";
import ContentLoader from "react-content-loader";
import {Diputado} from "../../services/deputies.model";

interface Props {
  deputy?: Diputado
  publicFigure?: FiguraPublica
}

export const DeputyProfileInfo: React.FC<Props> = ({deputy, publicFigure}) => {
  if(deputy && publicFigure){
    return (
      <FadeIn transitionDuration={1000}>
        <div className="p-3 text-left">
          <Avatar variant="circle" alt={publicFigure.Nombre}
                  src={`${BASE_URL}/img/avatar/${deputy.Id}.jpeg`} style={{height: "150px", width: "150px"}}/>
          <div className="font-weight-bold font-size-xl line-height-1 py-3">
            {publicFigure.Nombre}
          </div>
          <div className="pb-3 font-size-sm text-black-50">
            <Age born={publicFigure.Nacio}/>
          </div>
        </div>
      </FadeIn>
    )
  } else {
    return (
      <ContentLoader
        speed={2}
        viewBox="0 0 400 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="32" y="184" rx="3" ry="3" width="305" height="17"/>
        <rect x="33" y="226" rx="3" ry="3" width="110" height="10"/>
        <circle cx="107" cy="97" r="75"/>
        <rect x="32" y="252" rx="3" ry="3" width="195" height="10"/>
      </ContentLoader>
    )
  }
}
