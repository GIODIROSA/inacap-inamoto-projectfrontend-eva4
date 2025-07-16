export interface vinylProducts extends VinylData {
  vinylProducts: VinylData[];
}

export interface VinylData {
  id: number;
  nombre: string;
  artista: string;
  artistaId: number;
  genero: string;
  subgenero?: string;
  formato: string;
  precio: number;
  precioOferta: number;
  stock: number;
  fechaLanzamiento: string;
  fechaReedicion?: string;
  descripcionCorta: string;
  descripcionLarga: string;
  portadaUrl: string;
  imagenesAdicionales: string[];
  tags: string[];
  resennas: Array<{
    usuario: string;
    calificacion: number;
    comentario: string;
    fechaReseña: string;
  }>;
  promocionId?: string;
  categoria: string;
  disponibilidad: string;
  estadoProducto: string;
  tracklist: string[];
  duracionTotal: string;
  discografica: string;
  producidoEn: string;
  masterizadoPor?: string;
  pesoVinilo: string;
  rpm: number;
  incluye: string[];
  codigoBarras: string;
  numeroLanzamiento: string;
  esEdicionLimitada: boolean;
  numeroEdicion?: number;
  totalEdiciones?: number;
  coleccion?: string;
  colaboraciones?: string[];
  idioma: string;
  pais: string;
  dimensiones: string;
  material: string;
  colorVinilo: string;
  calificacionPromedio: number;
  totalResennas: number;
}

export interface Resenna {
  usuario: string;
  calificacion: number;
  comentario: string;
  fechaReseña: string;
}
