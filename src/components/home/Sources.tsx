import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container, Grid} from '@material-ui/core';

export const Sources: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={6} className="py-3 my-3 no-gutters">
        <Grid item xl={6} className="bg-white">
          <div className="p-3">
            <div className="p-0 p-lg-3">
              <h1 className="display-4 font-weight-bold mb-3">
                Orígenes de Información
              </h1>
              <p className="font-size-lg text-black-50">
                Buscamos en portales de instituciones públicas y de información periodística buscando cruzar la
                información obtenida, sin importar el formato o el mecanismo de obtención, nosotros nos encargamos de
                lidiar con ello. Los orígenes de información con los que hemos trabajado hasta el momento son:
              </p>
              <Grid container spacing={6} className="text-first mt-4">
                <Grid item sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']}/>
                    </div>
                    <span className="pt-1">Información Censal <span className="text-black-50">- Instituto Nacional de Estadísticas</span></span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']}/>
                    </div>
                    <span className="pt-1">Resultados Electorales <span className="text-black-50">- Servicio Electoral</span></span>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']}/>
                    </div>
                    <span className="pt-1">Actividad Legislativa <span className="text-black-50">- Cámara de Diputad@s</span></span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
