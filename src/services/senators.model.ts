export interface Senador {
  Id: number
  Nombres: string
  ApellidoPaterno: string
  ApellidoMaterno: string
  Region: string
  Circunscripcion: number
  PartidoId: string
  FiguraPublicaId: string
}

export interface Senadores {
  [Id: string]: Senador
}
