import React from "react";
import {NavLink} from "react-router-dom";
import {Election} from "../services/elections.model";
import {Loading} from "./Loading";

interface Props {
  elections?: Election[]
}

export const ElectionList: React.FC<Props> = ({elections}) => {

  return (
    <>
      {!elections && <Loading/>}
      {elections && (
        <ul>
          {elections.map((election) => {
            return (
              <li key={election.Date}>
                <NavLink to={`/elecciones/${election.Date}`}>{election.Date}</NavLink>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
