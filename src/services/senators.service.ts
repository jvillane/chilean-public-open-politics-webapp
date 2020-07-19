import axios from "axios";
import {ProyectosLey, Senadores, Votacion} from "./senators.model";

export interface VotacionMap {
  [id: string]: Votacion
}

let _senators: Senadores;
let _lawProjects: ProyectosLey;
let _votings: VotacionMap

export const getSenators = async (): Promise<Senadores> => {
  if (_senators === undefined) {
    const response = await axios.get<Senadores>('data/senadores.listado.json');
    _senators = response.data;
  }
  return _senators;
}

export const getLawProjects = async (): Promise<ProyectosLey> => {
  if (_lawProjects === undefined) {
    const response = await axios.get<ProyectosLey>('data/senadores.proyectos_ley.json');
    _lawProjects = response.data;
  }
  return _lawProjects;
}

export const getVotings = async (): Promise<VotacionMap> => {
  if (_lawProjects === undefined) {
    _lawProjects = await getLawProjects();
  }
  if (_votings === undefined) {
    _votings = {};
    for (const lawProject of Object.values(_lawProjects)) {
      if (lawProject.Votaciones) {
        let i = 1;
        for (const voting of lawProject.Votaciones) {
          _votings[`${lawProject.BoletinNumero}_${i++}`] = voting;
        }
      }
    }
  }
  return _votings;
}

export const getVoting = async (id: string): Promise<Votacion | undefined> => {
  if (_votings === undefined) {
    _votings = await getVotings();
  }
  const [boletin, index] = id.split("_");
  for (const lawProject of Object.values(_lawProjects)) {
    if (lawProject.BoletinNumero === boletin) {
      return lawProject.Votaciones[+index - 1];
    }
  }
  return undefined;
}
