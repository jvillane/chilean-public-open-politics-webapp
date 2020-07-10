import axios from "axios";
import {FiguraPublica, FigurasPublicas, Media, MediaDetails} from "./profile.model";

let _media: Media;
let _publicfigures: FigurasPublicas;

export const getMedia = async (): Promise<Media> => {
    if(_media === undefined) {
      const response = await axios.get<Media>('data/figura_publica.media.json');
      _media = response.data;
    }
    return _media;
}

export const getMediadetails = (id: string): MediaDetails | undefined => {
  if(_media === undefined) {
    return undefined;
  }
  return _media[id];
}

export const getPublicFigures = async (): Promise<FigurasPublicas> => {
  if(_publicfigures === undefined) {
    const response = await axios.get<FigurasPublicas>('data/figura_publica.json');
    _publicfigures = response.data;
  }
  return _publicfigures;
}

export const getPublicFigure = async (id: string): Promise<FiguraPublica | undefined> => {
  if(_publicfigures === undefined) {
    await getPublicFigures();
  }
  return _publicfigures[id];
}
