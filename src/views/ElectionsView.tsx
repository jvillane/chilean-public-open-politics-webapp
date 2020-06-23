import React, {useEffect, useState} from "react";
import {Election} from "../services/elections.model";
import {getElections} from "../services/elections.service";
import {ElectionList} from "../components/ElectionList";

export const ElectionsView: React.FC = () => {
  const [elections, setElections] = useState<Election[]>();

  useEffect(() => {
      getElections().then(elections => setElections(elections))
    }, []);

  return (
    <>
      <h1>Elecciones</h1>
      <ElectionList elections={elections}/>
    </>
  )
}
