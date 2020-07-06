import React from "react";
import {useParams} from "react-router";
import {ProfileDetails} from "../components/profile/ProfileDetails";

interface Params {
  id: string
}

export const ProfileView: React.FC = () => {
  const params = useParams<Params>();
  const id = params.id;

  return (
    <>
      <ProfileDetails id={id}/>
    </>
  )
}
