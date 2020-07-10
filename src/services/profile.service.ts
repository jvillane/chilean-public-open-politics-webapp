import axios from "axios";
import {FiguraPublica, FigurasPublicas, Media, MediaDetails} from "./profile.model";

let _media: Media;

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

export const getDetails = (id: string): Promise<FiguraPublica | undefined> => {
  return new Promise<FiguraPublica | undefined>((resolve, reject) => {
    axios.get<FigurasPublicas>('data/public_figures.json')
      .then(response => resolve(response.data[id]))
      .catch(err => reject(err));
  })
}
