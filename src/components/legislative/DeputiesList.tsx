import React, {useEffect, useState} from "react";
import {Diputados} from "../../services/deputies.model";
import {getDeputies} from "../../services/deputies.service";
import {Grid} from "@material-ui/core";
import {getMedia, getPublicFigures} from "../../services/profile.service";
import {ProfileMini} from "../profile/ProfileMini";
import {getParties} from "../../services/parties.service";

export const DeputiesList: React.FC = () => {
  const [deputies, setDeputies] = useState<Diputados>();

  useEffect(() => {
    Promise.all([getDeputies(), getMedia(), getPublicFigures(), getParties()])
      .then(responses => setDeputies(responses[0]))
  }, []);

  return (
    <Grid container spacing={3}>
      {deputies && Object.keys(deputies).map(id => {
        return (
          <Grid item xs={6} sm={4} xl={3} key={`senator_${id}`}>
            <ProfileMini withPartyName id={deputies[id].FiguraPublicaId} link={`/diputados/integrante/${id}`}/>
          </Grid>
        )
      })}
    </Grid>
  )
}
