import {Diputado, Diputados, Periodos, Votacion, Votaciones} from "./deputies.model";
import axios from "axios";
import moment from "moment";

let _deputies: Diputados;
let _lapses: Periodos;

export const getLapses = async (): Promise<Periodos> => {
  if (_lapses === undefined) {
    const response = await axios.get<Periodos>('data/diputados.periodos.json');
    _lapses = response.data;
    _lapses = Object.keys(_lapses)
      .filter(
        key => moment(_lapses[key].Inicio).isAfter('1989-12-31')
      )
      .reduce<Periodos>((lapses, key) => {
        return {...lapses, [key]: _lapses[key]}
      }, {})
  }
  return _lapses;
}

export const getDeputies = async (): Promise<Diputados> => {
  if (_deputies === undefined) {
    const response = await axios.get<Diputados>('data/diputados.listado.json');
    _deputies = response.data;
  }
  return _deputies;
}

export const getDeputy = async (id: string): Promise<Diputado | undefined> => {
  if (_deputies === undefined) {
    await getDeputies();
  }
  return _deputies[id];
}

export const getVotings = async (year: number, month: number): Promise<Votaciones> => {
  const response = await axios.get<Votaciones>(`data/diputados.votacion.${year}.json`);
  const result: Votaciones = {
    Diputados: response.data.Diputados,
    Votaciones: {}
  };
  for (const voteId in response.data.Votaciones) {
    const date = moment(response.data.Votaciones[voteId].Fecha);
    if(date.get('year') === year && date.get('month') === month) {
      result.Votaciones[voteId] = response.data.Votaciones[voteId];
    }
  }
  return result;
}

export const getVoting = async (year: string, id: string): Promise<Votacion | undefined> => {
  const response = await axios.get<Votaciones>(`data/diputados.votacion.${year}.json`);
  for (const votingId in response.data.Votaciones) {
    if(votingId === id) {
      return response.data.Votaciones[votingId];
    }
  }
  return undefined;
}
