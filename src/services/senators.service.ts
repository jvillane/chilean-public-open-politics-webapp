import axios from "axios";
import {Senadores} from "./senators.model";

let _senators: Senadores;

export const getSenators = async (): Promise<Senadores> => {
  if (_senators === undefined) {
    const response = await axios.get<Senadores>('data/senadores.listado.json');
    _senators = response.data;
  }
  return _senators;
}
