import {Diputado, Diputados, Periodos} from "./deputies.model";
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
