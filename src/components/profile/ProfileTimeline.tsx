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
import {Diputado, Periodos} from "../../services/deputies.model";
import {FiguraPublica} from "../../services/profile.model";
import moment, {Moment} from "moment";
import {getLapses} from "../../services/deputies.service";

interface Props {
  publicFigure: FiguraPublica
  deputy?: Diputado
}

interface Event {
  date: Moment
  displayDate: string
  children: ReactNode
}

export const ProfileTimeline: React.FC<Props> = ({publicFigure, deputy }) => {
  const [events, setEvents] = useState<Event[]>();

  useEffect(() => {
    getLapses()
      .then(lapses => updateEvents(lapses))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deputy, publicFigure]);

  const updateEvents = (lapses: Periodos) => {
    if (deputy) {
      const events: Event[] = [];
      for (const lapse of Object.values(lapses)) {
        for (const militancy of deputy.Militancia) {
          if (militancy.Inicio === lapse.Inicio) {
            const date = moment(lapse.Inicio);
            events.push({
              date,
              displayDate: date.format("DD-MMM-YYYY"),
              children: <>Inicia período {lapse.Nombre} en Cámara Baja, bancada <b>{militancy.Nombre}</b></>
            })
          } else if (militancy.Termino === lapse.Termino) {
            const date = moment(lapse.Inicio);
            events.push({
              date,
              displayDate: date.format("DD-MMM-YYYY"),
              children: <>{militancy.Alias === 'IND' ? <>Cambio en militancia, a
                bancada <b>Independiente</b></> : <>Ahora pertenece a <b>{militancy.Nombre}</b></>}</>
            })
          }
          if (militancy.Termino === lapse.Termino) {
            const date = moment(lapse.Termino);
            events.push({
              date,
              displayDate: date.format("DD-MMM-YYYY"),
              children: <>Finaliza período {lapse.Nombre} en Cámara Baja</>
            })
          }
        }
      }
      setEvents(events.sort((e1, e2) => e2.date.diff(e1.date)));
    }
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
