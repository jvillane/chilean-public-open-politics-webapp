import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getDeputy} from "../services/deputies.service";
import {Profile} from "../components/profile/Profile";

interface Params {
  id: string
}

export const LegislativeSenatorDetailsView: React.FC = () => {
  const {id} = useParams<Params>();
  const [publicFigureId, setPublicFigureId] = useState<string>();

  useEffect(() => {
    getDeputy(id)
      .then(deputy => {
        if (deputy && deputy.FiguraPublicaId) {
          setPublicFigureId(deputy.FiguraPublicaId)
        } else {
          //TODO add deputy not found view
        }
      })
  }, [id])

  return (
    <Profile id={publicFigureId}/>
  )
}
