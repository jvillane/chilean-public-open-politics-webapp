import axios from "axios";
import {Noticia} from "./news.model";

let _news: Noticia[];

export const getNews = async (): Promise<Noticia[]> => {
  if (_news === undefined) {
    const response = await axios.get<Noticia[]>('data/noticias.listado.json');
    _news = response.data;
  }
  return _news;
}

export const getNewsByPublicFigureId = async (id: string): Promise<Noticia[]> => {
  if (_news === undefined) {
    _news = await getNews();
  }
  const response: Noticia[] = [];
  for (const _new of _news) {
    if(_new.FigurasPublicas.includes(id)){
      response.push(_new);
    }
  }
  return response;
}
