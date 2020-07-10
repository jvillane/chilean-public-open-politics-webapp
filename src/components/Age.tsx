import React from "react";
import moment from "moment";
import {Box} from "@material-ui/core";

interface Props {
  born: string
}

export const Age: React.FC<Props> = ({born}) => {

  const age = moment(born, 'YYYY-MM-DD').toNow(true);

  return (
    <div>
      {age} <Box color="info.main">({moment(born).format('DD-MM-YYYY')})</Box>
    </div>
  )
}
