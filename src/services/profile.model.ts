export interface MediaDetails {
  avatar: string
}

export interface Media {
  [id: string]: MediaDetails
}

export interface Referencia {
  Id: string
  Nombre: string
}

export interface ReferenciaPareja extends Referencia {
  Desde?: string
  Hasta?: string
}

export interface FiguraPublica {
  Nombre: string
  Nacio: string
  Murio?: string
  Familia?: {
    Esposa?: ReferenciaPareja[]
    Marido?: ReferenciaPareja[]
    Hijos?: Referencia[]
  }
  Biografia?: {
    [fuente: string]: string
  }
  DiputadoId?: number | number[]
}

export interface FigurasPublicas {
  [id: string]: FiguraPublica
}
