export interface IdValor {
  Id: string
  Valor: string
}

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

export interface Asistencia {
  [DiputadoId: string]: {
    TipoAsistencia: IdValor
    Justificacion?: {
      Id: string
      Valor: string
      RebajaAsistencia: boolean
      RebajaQuorum: boolean
    }
  }
}

export interface Sesion {
  Numero: number
  Inicio: string
  Termino: string
  Tipo: IdValor
  Estado: IdValor
  Asistencia: Asistencia
}

export interface Voto {
  [DiputadoId: string]: IdValor
}

export interface Votacion {
  Descripcion: string
  BoletinNumero?: string
  ProyectoLeyId?: string
  Fecha: string
  Total: {
    Si: number
    No: number
    Abstencion: number
    Dispensado: number
  }
  Quorum: IdValor
  Resultado?: IdValor
  Tipo: IdValor
  Votos: Voto
  ProyectoLeyNombre?: string
  Articulo?: string
}

export interface Sesiones {
  Diputados: {
    [id: string]: string
  }
  Sesiones: {
    [Id: string]: Sesion
  }
}

export interface Votaciones {
  Diputados: {
    [DiputadoId: string]: string
  }
  Votaciones: {
    [VotacionId: string]: Votacion
  }
}

export interface ProyectoLeyAutorDiputado {
  Id: string
  Nombre: string
  ApellidoPaterno: string
  ApellidoMaterno: string
}

export interface ProyectoLeyAutor {
  Orden: string
  Diputado: ProyectoLeyAutorDiputado
}

export interface ProyectoLeyVotacion  {
  Descripcion: string
  Fecha: string
  TotalSi: string
  TotalNo: string
  TotalAbstencion: string
  TotalDispensado: string
  Quorum: IdValor
  Resultado: IdValor
  Tipo: IdValor
  TipoVotacion: IdValor
  Articulo: string
  TramiteConstitucional: IdValor
  TramiteReglamentario: IdValor
}

export interface ProyectoLey {
  Id: string
  NumeroBoletin: string
  Nombre: string
  FechaIngreso: string
  TipoIniciativa: IdValor
  CamaraOrigen: IdValor
  Autores: ProyectoLeyAutor[]
  Votaciones: {
    [id: string]: ProyectoLeyVotacion
  }
  Materias: IdValor[]
  Admisible: boolean
}

export interface ProyectosLey {
  [NumeroBoletin: string]: ProyectoLey
}
