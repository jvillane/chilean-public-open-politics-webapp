import {IconName} from "@fortawesome/fontawesome-common-types";
import {FiguraPublica} from "../../services/profile.model";
import {IdValor} from "../../services/deputies.model";

export type VoteType = "VOTE_IN_FAVOR" | "VOTE_AGAINST" | "VOTE_ABSTENTION" | "VOTE_DISPENSED" | "VOTE_MATCHING";

export const DeputiesVoteTypeArray: VoteType[] = ["VOTE_IN_FAVOR", "VOTE_AGAINST", "VOTE_ABSTENTION", "VOTE_DISPENSED"]
export const SenatorsVoteTypeArray: VoteType[] = ["VOTE_IN_FAVOR", "VOTE_AGAINST", "VOTE_ABSTENTION", "VOTE_MATCHING"]

export const VT_LABEL: {[key in VoteType]: string} = {
  VOTE_IN_FAVOR: "A Favor",
  VOTE_AGAINST: "En Contra",
  VOTE_ABSTENTION: "Abstención",
  VOTE_DISPENSED: "Dispensado",
  VOTE_MATCHING: "Pareo"
}

export const VT_ICON: {[key in VoteType]: IconName} = {
  VOTE_IN_FAVOR: "check",
  VOTE_AGAINST: "times",
  VOTE_ABSTENTION: "hand-paper",
  VOTE_DISPENSED: "ban",
  VOTE_MATCHING: "people-arrows"
}

export const VT_TEXT: {[key in VoteType]: string} = {
  VOTE_IN_FAVOR: "text-success",
  VOTE_AGAINST: "text-danger",
  VOTE_ABSTENTION: "text-warning",
  VOTE_DISPENSED: "text-dark",
  VOTE_MATCHING: "text-dark"
}

export const VT_BTN: {[key in VoteType]: string} = {
  VOTE_IN_FAVOR: "btn-success",
  VOTE_AGAINST: "btn-danger",
  VOTE_ABSTENTION: "btn-warning",
  VOTE_DISPENSED: "btn-dark",
  VOTE_MATCHING: "btn-dark",
}

export interface Vote {
  PublicFigureId: string
  Vote: VoteType
}

export type LegislatorType = "DEPUTY" | "SENATOR";

export const LEGISLATOR_PATH: {[key in LegislatorType]: string} = {
  DEPUTY: "/diputados/integrante/:id",
  SENATOR: "/senadores/integrante/:id",
}

export const LEGISLATOR_ID_KEY: {[key in LegislatorType]: keyof FiguraPublica & string} = {
  DEPUTY: "DiputadoId",
  SENATOR: "SenadorId"
}

export const GET_LEGISLATOR_ID_PATH = (type: LegislatorType, id: string) => {
  return LEGISLATOR_PATH[type].replace(":id", id)
}

export const getDeputyVotingValue = (value: IdValor): VoteType => {
  switch (+value.Id) {
    case 0:
      return "VOTE_AGAINST";
    case 1:
      return "VOTE_IN_FAVOR";
    case 2:
      return "VOTE_ABSTENTION";
    case 3:
    default:
      return "VOTE_DISPENSED";
  }
}

export const getSenatorVotingValue = (value: string): VoteType => {
  switch (value) {
    case "No":
      return "VOTE_AGAINST";
    case "Si":
      return "VOTE_IN_FAVOR";
    case "Abstencion":
      return "VOTE_ABSTENTION";
    case "Pareo":
    default:
      return "VOTE_MATCHING";
  }
}
