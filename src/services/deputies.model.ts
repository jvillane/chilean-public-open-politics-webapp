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
    TipoAsistencia: {
      Id: string
      Valor: string
    }
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
  Tipo: {
    Id: number
    Nombre: string
  }
  Estado: {
    Id: number
    Nombre: string
  }
  Asistencia: Asistencia
}

export interface Voto {
  [DiputadoId: string]: {
    Id: string
    Valor: string
  }
}

export interface Votacion {
  Descripcion: string
  Fecha: string
  Total: {
    Si: number
    No: number
    Abstencion: number
    Dispensado: number
  }
  Quorum: {
    Id: number
    Valor: string
  }
  Resultado?: {
    Id: number
    Valor: string
  }
  Tipo: {
    Id: number
    Valor: string
  }
  Votos: Voto
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
