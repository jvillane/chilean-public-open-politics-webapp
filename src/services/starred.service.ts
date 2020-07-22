import axios from "axios";
import {VotacionDiputadosDestacada, VotacionSenadoresDestacada} from "./starred.model";

let _starredDeputiesVoting: VotacionDiputadosDestacada[];
let _starredSenatorsVoting: VotacionSenadoresDestacada[];

export const getStarredDeputiesVoting = async (): Promise<VotacionDiputadosDestacada[]> => {
  if (_starredDeputiesVoting === undefined) {
    const response = await axios.get<VotacionDiputadosDestacada[]>('data/destacados.votaciones.diputados.json');
    _starredDeputiesVoting = response.data;
  }
  return _starredDeputiesVoting;
}

export const getStarredSenatorsVoting = async (): Promise<VotacionSenadoresDestacada[]> => {
  if (_starredSenatorsVoting === undefined) {
    const response = await axios.get<VotacionSenadoresDestacada[]>('data/destacados.votaciones.senadores.json');
    _starredSenatorsVoting = response.data;
  }
  return _starredSenatorsVoting;
}
