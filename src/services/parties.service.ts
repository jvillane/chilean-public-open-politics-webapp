import axios from "axios";
import {Partido, Partidos} from "./parties.model";

let _parties: Partidos;

export const getParties = async (): Promise<Partidos> => {
  if (_parties === undefined) {
    const response = await axios.get<Partidos>('data/partidos.listado.json');
    _parties = response.data;
  }
  return _parties;
}

export const getParty = async (id: string): Promise<Partido> => {
  if (_parties === undefined) {
    await getParties();
  }
  return _parties[id];
}
