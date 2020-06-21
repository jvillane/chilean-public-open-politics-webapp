import React, {useEffect, useState} from "react";
import {Election} from "../services/elections.model";
import {getElection} from "../services/elections.service";
import {useParams} from "react-router";
import {Loading} from "../components/Loading";

interface Params {
  date: string
}

export const ElectionView: React.FC = () => {
  const [election, setElection] = useState<Election>();
  const params = useParams<Params>();
  const date = params.date;

  useEffect(() => {
    getElection(date).then(election => setElection(election))
  }, [date]);

  return (
    <>
      {!election && <Loading/>}
      {election && (
        <>
          <h1>Detalle Elección</h1>
          <dl>
            <dt>Cargo</dt>
            <dd>{election.Position}</dd>
            <dt>Tipo</dt>
            <dd>{election.Instance}</dd>
            <dt>Fecha</dt>
            <dd>{election.Date}</dd>
            <dt>Período</dt>
            <dd>Del {election.Period.FromYear} al {election.Period.ToYear}</dd>
          </dl>
        </>
      )}
    </>
  )
}
