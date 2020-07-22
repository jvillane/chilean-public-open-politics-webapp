import React from "react";
import {useParams} from "react-router";
import {Profile} from "../components/profile/Profile";

interface Params {
  id: string
}

export const PublicFigureDetailsView: React.FC = () => {
  const {id} = useParams<Params>();

  return (
    <Profile id={id}/>
  )
}
