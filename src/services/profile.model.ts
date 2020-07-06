export interface PublicFigureReference {
  Id: string
  Name: string
}

export interface PartnerReference {
  Id: string
  Name: string
  From?: string
  To?: string
}

export interface PublicFigure {
  Name: string
  Born: string
  Died?: string
  Family?: {
    Wife?: PartnerReference[]
    Husband?: PartnerReference[]
    Children?: PublicFigureReference[]
  }
  Biography?: {
    [source: string]: string
  }
  DeputyId?: number | number[]
  Image?: string
}

export interface PublicFigureList {
  [id: string]: PublicFigure
}
