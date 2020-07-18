import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {getMedia, getPublicFigures} from "../../services/profile.service";
import {Senadores} from "../../services/senators.model";
import {getSenators} from "../../services/senators.service";
import {ProfileMini} from "../profile/ProfileMini";

export const SenatorsList: React.FC = () => {
  const [senators, setSenators] = useState<Senadores>();

  useEffect(() => {
    Promise.all([getSenators(), getMedia(), getPublicFigures()])
      .then(responses => setSenators(responses[0]))
  }, []);

  return (
    <Grid container spacing={3}>
      {senators && Object.keys(senators).map(id => {
        return (
          <Grid item xs={6} sm={4} xl={3} key={`senator_${id}`}>
            <ProfileMini withPartyName id={senators[id].FiguraPublicaId} link={`/senadores/integrante/${id}`}/>
          </Grid>
        )
      })}
    </Grid>
  )
}
