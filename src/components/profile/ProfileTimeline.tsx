import React, {ReactNode, useEffect, useState} from 'react';
import {Chip, Typography} from "@material-ui/core";
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
import {getNewsByPublicFigureId} from "../../services/news.service";
import {TimelineStory} from "./timeline/TimelineStory";

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

  const updateSenator = async (events: Event[]) => {
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
  }

  const updateNews = async (events: Event[]) => {
    for (const story of await getNewsByPublicFigureId(publicFigure.Id)) {
      const momentDate = moment(story.Fecha);
      events.push({
        date: momentDate,
        displayDate: momentDate.format("DD-MMM-YYYY"),
        children: <TimelineStory story={story} publicFigureId={publicFigure.Id}/>
      })
    }
  }

  const updateEvents = async () => {
    const events: Event[] = [];
    Promise.all([updateDeputy(events), updateSenator(events), updateNews(events)])
      .then(() => setEvents(events.sort((e1, e2) => e2.date.diff(e1.date))))
  }

  return (
    <Timeline align="alternate" className="py-3">
      {events && events.map((event, key) => {
        return (
          <TimelineItem key={key}>
            <TimelineOppositeContent>
              <Chip label={event.displayDate} variant="outlined" className="bg-gray-200 text-primary"/>
            </TimelineOppositeContent>
            <TimelineSeparator className="my-2">
              <TimelineDot variant="outlined" color="grey"/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>{event.children}</TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  );
}
