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

export interface Tramite {
  Sesion?: string
  Fecha: string
  Descripcion?: string
  Etapa: string
  Camara: string
}

export interface Votos {
  [figuraPublicaId: string]: string
}

export interface Votacion {
  Sesion: string
  Fecha: string
  Tema: string
  Resultado: {
    Si: number
    No: number
    Abstencion: number
    Pareo: number
  }
  Tipo?: string
  Etapa?: string
  Detalle: Votos
}

export interface Urgencia {
  Tipo: string
  Ingreso: {
    Fecha: string
    Mensaje?: string
    Camara?: string
  }
  Retiro?: {
    Fecha: string
    Mensaje?: string
    Camara?: string
  }
}

export interface Informe {
  Fecha?: string
  Tramite: string
  Etapa: string
  Link?: string
}

export interface Comparado {
  Valor: string
  Link: string
}

export interface Oficio {
  Fecha: string
  Tramite: string
  Etapa: string
  Tipo: string
  Camara: string
  Link?: string
}

export interface Indicacion {
  Fecha: string
  Tramite: string
  Etapa: string
  Link: string
}
export interface Observacion {

}

export interface ProyectoLey {
  BoletinNumero: string
  Titulo: string
  FechaIngreso: string
  Iniciativa: string
  CamaraOrigen: string
  UrgenciaActual: string
  Etapa: string
  SubEtapa: string
  LeyNumero: string
  DiarioOficial: string
  Estado: string
  Refundidos: string
  LinkMensajeMocion: string
  Autores: string[]
  Tramitacion: Tramite[]
  Votaciones: Votacion[]
  Urgencias: Urgencia[]
  Informes: Informe[]
  Comparados: Comparado[]
  Oficios: Oficio[]
  Indicaciones: Indicacion[]
  Observaciones: Observacion[]
  Materias: string[]
}

export interface ProyectosLey {
  [BoletinNumero: string]: ProyectoLey
}

export interface PeriodoSenador {
  Id:  string
  Inicio: string
  Termino: string
}

export interface PeriodosSenador {
  [periodoId: string]: PeriodoSenador
}

export interface SenadorPeriodos {
  [senadorId: string]: PeriodoSenador[]
}
