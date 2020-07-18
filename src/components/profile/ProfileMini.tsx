import React, {useEffect, useState} from "react";
import {BASE_URL} from "../../config";
import Avatar from "react-avatar";
import {getMediadetails, getPublicFigure, getPublicFigurePartyId} from "../../services/profile.service";
import {useHistory} from "react-router";
import {FiguraPublica} from "../../services/profile.model";
import {Partido} from "../../services/parties.model";
import {getParty} from "../../services/parties.service";

interface Props {
  link: string
  id: string
  withPartyName?: boolean
}

interface State {
  publicFigure: FiguraPublica
  party: Partido
}

export const ProfileMini: React.FC<Props> = ({link, id, withPartyName}) => {
  const history = useHistory();
  const [state, setState] = useState<State>();

  useEffect(() => {
    getPublicFigure(id)
      .then(publicFigure => {
        const partyId = getPublicFigurePartyId(publicFigure);
        if (partyId) {
          getParty(partyId)
            .then(party => setState({party, publicFigure}))
        } else {
          console.error("No se pudo obtener el partido para", publicFigure);
        }
      });
  }, [id]);

  const mediaDetails = getMediadetails(id);
  const imgSource = mediaDetails && mediaDetails.avatar ? `${BASE_URL}/img/avatar/${mediaDetails.avatar}` : undefined;

  return (
    <div className="position-relative py-1 py-xl-3 px-2 px-xl-3 clickable"
         onClick={() => history.push(link)}>
      {state && (
        <>
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <Avatar round alt={state.publicFigure.Nombre} size="80px" name={state.publicFigure.Nombre}
                      src={imgSource}/>
            </div>
          </div>
          <div className="font-weight-bold mt-1">
            {state.publicFigure.Nombre}
          </div>
          {withPartyName && (
            <div className="text-black-50">
              {state.party.Nombre}
            </div>
          )}
        </>
      )}
    </div>
  )
}
