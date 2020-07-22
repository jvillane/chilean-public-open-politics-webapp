import {Diputado, DiputadoPeriodos, Diputados, PeriodoDiputado, Votacion, Votaciones} from "./deputies.model";
import axios from "axios";
import moment from "moment";
import {VotacionDiputadosDestacada} from "./starred.model";
import {getStarredDeputiesVoting} from "./starred.service";

let _deputies: Diputados;
let _lapses: DiputadoPeriodos;

export const getDeputiesLapses = async (): Promise<DiputadoPeriodos> => {
  if (_lapses === undefined) {
    const response = await axios.get<DiputadoPeriodos>('data/diputados.periodos.json');
    _lapses = response.data;
  }
  return _lapses;
}

export const getDeputyLapses = async (deputyId: string): Promise<PeriodoDiputado[]> => {
  if (_lapses === undefined) {
    _lapses = await getDeputiesLapses();
  }
  return _lapses[deputyId];
}

export const getDeputies = async (): Promise<Diputados> => {
  if (_deputies === undefined) {
    const response = await axios.get<Diputados>('data/diputados.listado.json');
    _deputies = response.data;
  }
  return _deputies;
}

export const getDeputy = async (id?: string | number): Promise<Diputado | undefined> => {
  if (id === undefined) {
    return undefined;
  }
  if (_deputies === undefined) {
    await getDeputies();
  }
  return _deputies[String(id)];
}

export const getVotings = async (year: number, month: number): Promise<Votaciones> => {
  const response = await axios.get<Votaciones>(`data/diputados.votacion.${year}.json`);
  const result: Votaciones = {
    Diputados: response.data.Diputados,
    Votaciones: {}
  };
  for (const voteId in response.data.Votaciones) {
    const date = moment(response.data.Votaciones[voteId].Fecha);
    if (date.get('year') === year && date.get('month') === month) {
      result.Votaciones[voteId] = response.data.Votaciones[voteId];
    }
  }
  return result;
}

export const getVoting = async (year: string, id: string): Promise<Votacion | undefined> => {
  const response = await axios.get<Votaciones>(`data/diputados.votacion.${year}.json`);
  for (const votingId in response.data.Votaciones) {
    if (votingId === id) {
      return response.data.Votaciones[votingId];
    }
  }
  return undefined;
}

export const getStarredDeputiesVotingById = async (): Promise<{ starred: VotacionDiputadosDestacada[], votings: (Votacion | undefined)[] }> => {
  return new Promise(resolve => {
    getStarredDeputiesVoting()
      .then(starred => Promise.all(starred.map(sv => getVoting(sv.Anno, sv.Id)))
        .then(votings => resolve({starred, votings}))
      )
  })
}
