import axios from "axios";
import {PublicFigure, PublicFigureList} from "./profile.model";

export const getDetails = (id: string): Promise<PublicFigure | undefined> => {
  return new Promise<PublicFigure | undefined>((resolve, reject) => {
    axios.get<PublicFigureList>('data/public_figures.json')
      .then(response => resolve(response.data[id]))
      .catch(err => reject(err));
  })
}
