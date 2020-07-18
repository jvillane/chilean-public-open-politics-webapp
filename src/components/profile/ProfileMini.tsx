import React, {useEffect, useState} from "react";
import {BASE_URL} from "../../config";
import Avatar from "react-avatar";
import {getMediadetails, getPublicFigure} from "../../services/profile.service";
import {useHistory} from "react-router";
import {FiguraPublica} from "../../services/profile.model";

interface Props {
  link: string
  id: string
}

export const ProfileMini: React.FC<Props> = ({link, id}) => {
  const history = useHistory();
  const [pf, setPf] = useState<FiguraPublica>();

  useEffect(() => {
    getPublicFigure(id)
      .then(pf => setPf(pf));
  }, [id]);

  const mediaDetails = getMediadetails(id);
  const imgSource = mediaDetails && mediaDetails.avatar ? `${BASE_URL}/img/avatar/${mediaDetails.avatar}` : undefined;

  return (
    <div className="position-relative py-2 py-xl-4 px-3 px-xl-4 clickable"
         onClick={() => history.push(link)}>
      {pf && (
        <>
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <Avatar round alt={pf.Nombre} size="80px" name={pf.Nombre} src={imgSource}/>
            </div>
          </div>
          <div className="font-weight-bold mt-1">
            {pf.Nombre}
          </div>
          {pf.Militancias && (
            <div className="font-weight-bold mt-1">
              {pf.Militancias[0].PartidoId}
            </div>
          )}
        </>
      )}
    </div>
  )
}
