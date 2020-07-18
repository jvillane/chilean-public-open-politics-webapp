import axios from "axios";
import {Partidos} from "./parties.model";

let _parties: Partidos;

export const getParties = async (): Promise<Partidos> => {
  if (_parties === undefined) {
    const response = await axios.get<Partidos>('data/partidos.listado.json');
    _parties = response.data;
  }
  return _parties;
}
