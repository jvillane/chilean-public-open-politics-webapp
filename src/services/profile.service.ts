import axios from "axios";
import {FiguraPublica, FigurasPublicas, Media, MediaDetails} from "./profile.model";
import moment from "moment";
import {Partido} from "./parties.model";
import {getParty} from "./parties.service";

let _media: Media;
let _publicfigures: FigurasPublicas;

export const getMedia = async (): Promise<Media> => {
  if (_media === undefined) {
    const response = await axios.get<Media>('data/figura_publica.media.json');
    _media = response.data;
  }
  return _media;
}

export const getMediadetails = (id: string): MediaDetails | undefined => {
  if (_media === undefined) {
    return undefined;
  }
  return _media[id];
}

export const getPublicFigurePartyId = (pf: FiguraPublica, date?: string): string | undefined => {
  const votingMoment = date ? moment(date) : moment();
  if (pf.Militancias) {
    for (const militancy of pf.Militancias) {
      if (militancy.Desde && militancy.Hasta) {
        if (votingMoment.isBetween(moment(militancy.Desde), moment(militancy.Hasta), 'day', '[]')) {
          return militancy.PartidoId;
        }
      } else if (militancy.Desde) {
        if (votingMoment.isSameOrAfter(militancy.Desde)) {
          return militancy.PartidoId;
        }
      } else if (militancy.Hasta) {
        if (votingMoment.isSameOrBefore(militancy.Hasta)) {
          return militancy.PartidoId;
        }
      } else {
        return militancy.PartidoId;
      }
    }
  }
  return undefined;
}

export const getPublicFigureParty = async (pf: FiguraPublica, date?: string): Promise<Partido | undefined> => {
  const id = getPublicFigurePartyId(pf, date);
  if (id) {
    return await getParty(id);
  }
  return undefined;
}

export const getPublicFigures = async (): Promise<FigurasPublicas> => {
  if (_publicfigures === undefined) {
    const response = await axios.get<FigurasPublicas>('data/figura_publica.json');
    _publicfigures = response.data;
  }
  return _publicfigures;
}

export const getPublicFigure = async (id: string): Promise<FiguraPublica> => {
  if (_publicfigures === undefined) {
    await getPublicFigures();
  }
  return _publicfigures[id];
}
