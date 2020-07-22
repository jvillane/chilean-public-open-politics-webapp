export interface Noticia {
  Fecha: string
  Resumen: string
  Descripcion: string
  Links: {
    [fuente: string]: string
  }
  FigurasPublicas: string[]
}
