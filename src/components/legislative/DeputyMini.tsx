import React from "react";
import {Diputado} from "../../services/deputies.model";
import {BASE_URL} from "../../config";
import Avatar from "react-avatar";
import {getMediadetails} from "../../services/profile.service";
import {useHistory} from "react-router";

interface Props {
  id: string
  deputy: Diputado
}

export const DeputyMini: React.FC<Props> = ({id, deputy}) => {
  const history = useHistory();
  const name = `${deputy.Nombres} ${deputy.ApellidoPaterno} ${deputy.ApellidoMaterno}`;
  const mediaDetails = getMediadetails(deputy.Id);
  const imgSource = mediaDetails && mediaDetails.avatar ? `${BASE_URL}/img/avatar/${mediaDetails.avatar}` : undefined;

  return (
    <div className="position-relative py-2 py-xl-4 px-3 px-xl-4 clickable"
         onClick={() => history.push(`/legislativo/camara/integrante/${id}`)}>
      <div className="divider-v divider-v-lg"/>
      <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
        <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
          <Avatar round alt={name} size="80px" name={name} src={imgSource}/>
        </div>
      </div>
      <div className="font-weight-bold mt-1">
        {name}
      </div>
    </div>
  )
}
