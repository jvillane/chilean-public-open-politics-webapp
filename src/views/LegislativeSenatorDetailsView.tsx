import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Profile} from "../components/profile/Profile";
import {getSenator} from "../services/senators.service";

interface Params {
  id: string
}

export const LegislativeSenatorDetailsView: React.FC = () => {
  const {id} = useParams<Params>();
  const [publicFigureId, setPublicFigureId] = useState<string>();

  useEffect(() => {
    getSenator(id)
      .then(senator => {
        if (senator && senator.FiguraPublicaId) {
          setPublicFigureId(senator.FiguraPublicaId)
        } else {
          //TODO add deputy not found view
        }
      })
  }, [id])

  return (
    <Profile id={publicFigureId}/>
  )
}
