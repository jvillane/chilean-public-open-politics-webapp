import React, {useEffect, useState} from "react";
import {Avatar, Container, Fade, Grid, Paper} from '@material-ui/core';
import {BASE_URL} from "../../config";
import {FiguraPublica} from "../../services/profile.model";
import {getPublicFigure} from "../../services/profile.service";
import {Age} from "../Age";
import ContentLoader from "react-content-loader";

interface Props {
  id: string
}

export const ProfileDetails: React.FC<Props> = ({id}) => {
  const [details, setDetails] = useState<FiguraPublica>();

  useEffect(() => {
    setTimeout(() => {
      getPublicFigure(id).then(publicFigure => setDetails(publicFigure));
    }, 2000);
  }, [id]);

  console.log(details);

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper elevation={3}>
              {!details && (
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
              )}
              {details && (
                <Fade in timeout={1000}>
                  <div className="p-3 text-left">
                    <Avatar variant="circle" alt={details.Nombre}
                            src={`${BASE_URL}/img/avatar/${id}.jpeg`} style={{height: "150px", width: "150px"}}/>
                    <div className="font-weight-bold font-size-xl line-height-1 py-3">
                      {details.Nombre}
                    </div>
                    <div className="pb-3 font-size-sm text-black-50">
                      <Age born={details.Nacio}/>
                    </div>
                  </div>
                </Fade>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
