const marcaLavadora = () => {
  const a1 = {
    marca: "A",
    modelo: "a1",
    volumeTotalCamaraLitros: 270,
    capacidadeCargaBandejasInstrumentos: 10,
    capacidadeCargaTraqueias: 18,
    tempoMedioCicloInstrumentosCargaMaximaMin: 60,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 60
  }

  const a2 = {
    marca: "A",
    modelo: "a2",
    volumeTotalCamaraLitros: 365,
    capacidadeCargaBandejasInstrumentos: 15,
    capacidadeCargaTraqueias: 30,
    tempoMedioCicloInstrumentosCargaMaximaMin: 60,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 60
  }

  const b1 = {
    marca: "B",
    modelo: "b1",
    volumeTotalCamaraLitros: 287,
    capacidadeCargaBandejasInstrumentos: 10,
    capacidadeCargaTraqueias: 18,
    tempoMedioCicloInstrumentosCargaMaximaMin: 75,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 70
  }
  const b2 = {
    marca: "B",
    modelo: "b2",
    volumeTotalCamaraLitros: 400,
    capacidadeCargaBandejasInstrumentos: 15,
    capacidadeCargaTraqueias: 34,
    tempoMedioCicloInstrumentosCargaMaximaMin: 46,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 56
  }

  const c1 = {
    marca: "C",
    modelo: "c1",
    volumeTotalCamaraLitros: 250,
    capacidadeCargaBandejasInstrumentos: 10,
    capacidadeCargaTraqueias: 15,
    tempoMedioCicloInstrumentosCargaMaximaMin: 45,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 60
  }
  const c2 = {
    marca: "C",
    modelo: "c2",
    volumeTotalCamaraLitros: 350,
    capacidadeCargaBandejasInstrumentos: 12,
    capacidadeCargaTraqueias: 35,
    tempoMedioCicloInstrumentosCargaMaximaMin: 45,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 60
  }
  const d1 = {
    marca: "D",
    modelo: "d1",
    volumeTotalCamaraLitros: 264,
    capacidadeCargaBandejasInstrumentos: 12,
    capacidadeCargaTraqueias: 20,
    tempoMedioCicloInstrumentosCargaMaximaMin: 40,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 40
  }
  const d2 = {
    marca: "D",
    modelo: "d2",
    volumeTotalCamaraLitros: 492,
    capacidadeCargaBandejasInstrumentos: 18,
    capacidadeCargaTraqueias: 30,
    tempoMedioCicloInstrumentosCargaMaximaMin: 45,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 60
  }
  const e1 = {
    marca: "E",
    modelo: "e1",
    volumeTotalCamaraLitros: 254,
    capacidadeCargaBandejasInstrumentos: 6,
    capacidadeCargaTraqueias: 18,
    tempoMedioCicloInstrumentosCargaMaximaMin: 30,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 45
  }
  const e2 = {
    marca: "E",
    modelo: "e2",
    volumeTotalCamaraLitros: 296,
    capacidadeCargaBandejasInstrumentos: 10,
    capacidadeCargaTraqueias: 18,
    tempoMedioCicloInstrumentosCargaMaximaMin: 25,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 35
  }
  const e3 = {
    marca: "E",
    modelo: "e3",
    volumeTotalCamaraLitros: 359,
    capacidadeCargaBandejasInstrumentos: 15,
    capacidadeCargaTraqueias: 35,
    tempoMedioCicloInstrumentosCargaMaximaMin: 27,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 35
  }
  const f1 = {
    marca: "F",
    modelo: "f1",
    volumeTotalCamaraLitros: 298,
    capacidadeCargaBandejasInstrumentos: 12,
    capacidadeCargaTraqueias: 20,
    tempoMedioCicloInstrumentosCargaMaximaMin: 45,
    tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin: 45
  }

  const lavadoraTermodesinfectoraMarcaA = [a1, a2]
  const lavadoraTermodesinfectoraMarcaB = [b1, b2]
  const lavadoraTermodesinfectoraMarcaC = [c1, c2]
  const lavadoraTermodesinfectoraMarcaD = [d1, d2]
  const lavadoraTermodesinfectoraMarcaE = [e1, e2, e3]
  const lavadoraTermodesinfectoraMarcaF = [f1]

  const lavadoraTermodes = [
    lavadoraTermodesinfectoraMarcaA,
    lavadoraTermodesinfectoraMarcaB,
    lavadoraTermodesinfectoraMarcaC,
    lavadoraTermodesinfectoraMarcaD,
    lavadoraTermodesinfectoraMarcaE,
    lavadoraTermodesinfectoraMarcaF,
  ]

  return lavadoraTermodes
}

export { marcaLavadora }
