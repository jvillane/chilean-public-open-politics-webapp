import React from "react";
import {Button, Card, CardContent, Grid} from "@material-ui/core";
import {Votacion} from "../../../services/deputies.model";
import {getDeputyVotingValue, VT_BTN, VT_ICON, VT_LABEL} from "../../legislative/_legislative.types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

interface Props {
  text: string
  voting: Votacion
  deputyId: string
}

export const TimelineDeputyVoting: React.FC<Props> = ({text, voting, deputyId}) => {

  const vote = getDeputyVotingValue(voting.Votos[deputyId]);

  return (
    <Card className="card-border-top border-info mb-3" elevation={3}>
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center" className="mb-3">
          <Button size="small" variant="text"
                  className={`btn-animated-icon d-30 btn-pill p-0 btn-icon ${VT_BTN[vote]}`}>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', VT_ICON[vote]]}/>
            </span>
          </Button>
          <div className="font-size-sm text-black-50 ml-2">{VT_LABEL[vote]}</div>
        </Grid>
        <p className="text-justify">{text}</p>
        <Grid container spacing={3} className="text-center">
          <Grid item xs={4} className="text-center">
            <Button size="small" variant="text"
                    className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-success">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'check']}/>
                        </span>
            </Button>
            <div className="display-5 line-height-sm font-weight-light text-success">
              <CountUp start={0} end={voting.Total.Si} duration={4} delay={2} separator="" decimals={0} decimal=","/>
            </div>
          </Grid>
          <Grid item xs={4} className="text-center">
            <Button size="small" variant="text"
                    className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-danger">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'times']}/>
                        </span>
            </Button>
            <div className="display-5 line-height-sm font-weight-light text-danger">
              <CountUp start={0} end={voting.Total.No} duration={4} delay={2} separator="" decimals={0} decimal=","/>
            </div>
          </Grid>
          <Grid item xs={4} className="text-center">
            <Button size="small" variant="text"
                    className="btn-animated-icon d-30 btn-pill p-0 mb-2 btn-icon btn-warning">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'hand-paper']}/>
                        </span>
            </Button>
            <div className="display-5 line-height-sm font-weight-light text-warning">
              <CountUp start={0} end={voting.Total.Abstencion} duration={4} delay={2} separator="" decimals={0} decimal=","/>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
