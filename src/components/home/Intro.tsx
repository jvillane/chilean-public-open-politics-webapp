import React from "react";
import {Container, Grid} from "@material-ui/core";

export const Intro: React.FC = () => {
  return (
    <div className="py-2 feature-box">
      <Container className="pb-3">
        <div className="mb-4 text-center">
          <h4 className="font-weight-bold text-second display-2">
            Organización Territorial y Política
          </h4>
          <Grid item md={11} lg={10} className="mx-auto">
            <p className="text-second opacity-6 mt-3 mb-5 font-size-xxl">
              Nos encargamos de recopilar información desde fuentes de información pública y oficial, para poder
              colocarla a disposición de la comunidad, construir conocimiento y generar una fuente de información que
              aporte al conocimiento colectivo.
            </p>
          </Grid>
        </div>
        <Grid container spacing={6} className="mt-5">
          <Grid item xl={4} className="d-flex align-items-center">
            <Grid container spacing={0} className="w-100 mb-3 mb-xl-0">
              <Grid item lg={4} xl={12}>
                <div className="feature-box pr-4 text-center">
                  <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                    División Territorial
                  </h3>
                  <p className="text-black-50 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, debitis ea fuga fugit illo impedit laboriosam sunt. Aperiam, dolorem ducimus, earum ipsa ipsam laboriosam maiores minima minus nesciunt tempore ullam?
                  </p>
                </div>
              </Grid>
              <Grid item lg={4} xl={12}>
                <div className="feature-box pr-4 text-center">
                  <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                    Organización Política
                  </h3>
                  <p className="text-black-50 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium dignissimos eligendi, eveniet facilis hic impedit ipsum iusto minus nemo neque perferendis porro quibusdam quisquam repellendus, tenetur totam unde vero!
                  </p>
                </div>
              </Grid>
              <Grid item lg={4} xl={12}>
                <div className="feature-box pr-4 text-center">
                  <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                    Organización Judicial
                  </h3>
                  <p className="text-black-50 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur, excepturi laudantium quaerat sapiente soluta velit vero. Ab, commodi dolor ducimus eius ex magni maxime molestiae ratione, sapiente similique sunt.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
