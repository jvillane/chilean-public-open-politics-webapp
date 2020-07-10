export interface Periodo {
  Nombre: string
  Inicio: string
  Termino: string
}

export interface Periodos {
  [Id: string]: Periodo
}

export interface Afiliacion {
  Inicio: string
  Termino: string
  Id: string
  Nombre: string
  Alias: string
}

export interface Diputado {
  Nombres: string
  ApellidoPaterno: string
  ApellidoMaterno: string
  Nacimiento?: string
  Genero: string
  Militancia: Afiliacion[]
  Id: string
}

export interface Diputados {
  [Id: string]: Diputado
}
