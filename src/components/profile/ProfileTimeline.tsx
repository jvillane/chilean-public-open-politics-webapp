import React, {ReactNode, useEffect, useState} from 'react';
import {Typography} from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from "@material-ui/lab";
import {Diputado} from "../../services/deputies.model";
import {FiguraPublica} from "../../services/profile.model";
import moment, {Moment} from "moment";
import {Senador} from "../../services/senators.model";
import {getDeputyLapses} from "../../services/deputies.service";
import {getPublicFigureParty} from "../../services/profile.service";
import {getParties} from "../../services/parties.service";
import {TimelineLapse} from "./timeline/TimelineLapse";
import {getSenatorLapses} from "../../services/senators.service";

interface Props {
  publicFigure: FiguraPublica
  deputy?: Diputado
  senator?: Senador
}

interface Event {
  date: Moment
  displayDate: string
  children: ReactNode
}

export const ProfileTimeline: React.FC<Props> = ({publicFigure, deputy, senator}) => {
  const [events, setEvents] = useState<Event[]>();

  useEffect(() => {
    getParties()
      .then(() => updateEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicFigure, deputy, senator]);

  const updateDeputy = async (events: Event[]) => {
    if (deputy) {
      for (const lapse of await getDeputyLapses(deputy.Id)) {
        const momentFrom = moment(lapse.Inicio);
        const partyFrom = await getPublicFigureParty(publicFigure, lapse.Inicio);
        const momentTo = moment(lapse.Termino);
        const partyTo = await getPublicFigureParty(publicFigure, lapse.Termino);
        events.push({
          date: momentFrom,
          displayDate: momentFrom.format("DD-MMM-YYYY"),
          children: <TimelineLapse start baja name={lapse.Nombre} party={partyFrom}/>
        });
        events.push({
          date: momentTo,
          displayDate: momentTo.format("DD-MMM-YYYY"),
          children: <TimelineLapse baja name={lapse.Nombre} party={partyTo}/>
        });
      }
    }
    if (senator) {
      for (const lapse of await getSenatorLapses(senator.FiguraPublicaId)) {
        const momentFrom = moment(lapse.Inicio);
        const partyFrom = await getPublicFigureParty(publicFigure, lapse.Inicio);
        const momentTo = moment(lapse.Termino);
        const partyTo = await getPublicFigureParty(publicFigure, lapse.Termino);
        events.push({
          date: momentFrom,
          displayDate: momentFrom.format("DD-MMM-YYYY"),
          children: <TimelineLapse start name={lapse.Id} party={partyFrom}/>
        });
        events.push({
          date: momentTo,
          displayDate: momentTo.format("DD-MMM-YYYY"),
          children: <TimelineLapse name={lapse.Id} party={partyTo}/>
        });
      }
    }
  }

  const updateEvents = async () => {
    const events: Event[] = [];
    Promise.all([updateDeputy(events)])
      .then(() => setEvents(events.sort((e1, e2) => e2.date.diff(e1.date))))
  }

  return (
    <div className="pl-3">
      <div className="shadow-overflow">
        <Timeline align="alternate" className="py-3">
          {events && events.map((event, key) => {
            return (
              <TimelineItem key={key}>
                <TimelineOppositeContent>
                  <Typography color="secondary" variant="caption">{event.displayDate}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>{event.children}</TimelineContent>
              </TimelineItem>
            )
          })}
        </Timeline>
      </div>
    </div>
  );
}
