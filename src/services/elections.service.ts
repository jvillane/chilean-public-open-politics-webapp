import {Election} from "./elections.model";
import axios from "axios";

let _elections: Election[];

export const getElections = async (): Promise<Election[]> => {
  if (_elections) {
    return _elections;
  } else {
    const response = await axios.get<Election[]>('data/elections.president.json');
    _elections = response.data;
    return response.data;
  }
}

export const getElection = async (date: string): Promise<Election | undefined> => {
  const elections = _elections ? _elections : await getElections();
  for (const election of elections) {
    if (election.Date === date) {
      return election;
    }
  }
}
