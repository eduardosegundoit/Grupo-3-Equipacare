import { autoclavesVapor } from './autoclavesVapor.mjs'
import { lavadoraTermodesinfectora } from './lavadoraTermodesinfectora.mjs'

const marcasAutoclaves = (
  estimativaDeVolumeTotalDiarioLitros,
  cme,
  totalDeAutoclaves
) => {
  const autoclavesVaporMarcaA = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']
  const autoclavesVaporMarcaB = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8']
  const autoclavesVaporMarcaC = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']
  const autoclavesVaporMarcaD = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8']
  const autoclavesVaporMarcaE = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10', 'e11', 'e11', 'e13']
  const autoclavesVaporMarcaF = ['f1', 'f2', 'f3', 'f4']

  const autoClaves = [
    autoclavesVaporMarcaA,
    autoclavesVaporMarcaB,
    autoclavesVaporMarcaC,
    autoclavesVaporMarcaD,
    autoclavesVaporMarcaE,
    autoclavesVaporMarcaF,
  ]

  const resultados = []

  for (let n = 0 ; n < autoClaves.length; n++) {
    for (let jn = 0 ; jn < autoClaves[n].length; jn++) {
      const autoClavesMarca = String.fromCharCode(65 + n)
      const autoClavesModelo = autoClaves[n][jn]
      const autoClavesVolumeTotalCamaraLitros = 102 // DB-Mongo
      const volumeUtilCamaraLitros = 81 // DB-Mongo
      const tempoTotalMedioCicloAltaTemperaturaMin = 50 // DB-Mongo
      const tempoProcedimentoDiarioAquecimentoMin = 20 // DB-Mongo

      const resultado = autoclavesVapor(

        estimativaDeVolumeTotalDiarioLitros, cme, totalDeAutoclaves,

        autoClavesMarca, autoClavesModelo,
        autoClavesVolumeTotalCamaraLitros,
        volumeUtilCamaraLitros,
        tempoTotalMedioCicloAltaTemperaturaMin,
        tempoProcedimentoDiarioAquecimentoMin
      )

      resultados.push(resultado)
    }
  }

  return resultados
}

const marcasLavadoraTermodesinfectora = (
  estimativaDeVolumeTotalDiarioPorMaterial,
  cirurgiasPorDia,
  leitoUTI,
  totalDeLavadorasTermo
) => {
  const lavadoraTermodesinfectoraMarcaA = ['a1', 'a2']
  const lavadoraTermodesinfectoraMarcaB = ['b1', 'b2']
  const lavadoraTermodesinfectoraMarcaC = ['c1', 'c2']
  const lavadoraTermodesinfectoraMarcaD = ['d1', 'd2']
  const lavadoraTermodesinfectoraMarcaE = ['e1', 'e2', 'e3']
  const lavadoraTermodesinfectoraMarcaF = ['f1']

  const lavadoraTermodesinfectoras = [
    lavadoraTermodesinfectoraMarcaA,
    lavadoraTermodesinfectoraMarcaB,
    lavadoraTermodesinfectoraMarcaC,
    lavadoraTermodesinfectoraMarcaD,
    lavadoraTermodesinfectoraMarcaE,
    lavadoraTermodesinfectoraMarcaF,
  ]

  const resultados = []

  for (let i = 0 ; i < lavadoraTermodesinfectoras.length; i++) {
    for (let j = 0 ; j < lavadoraTermodesinfectoras[i].length; j++) {
      const lavadoraTermodesinfectoraMarca = String.fromCharCode(65 + i)
      const lavadoraTermodesinfectoraModelo = lavadoraTermodesinfectoras[i][j]
      const lavadoraTermodesinfectoraVolumeTotalCamaraLitros = 270 // DB-Mongo
      const capacidadeCargaBandejasInstrumentos = 10 // DB-Mongo
      const capacidadeCargaTraqueias = 18 // DB-Mongo
      const tempoMedioCicloInstrumentosCargaMaximaMin = 60 // DB-Mongo
      const tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin = 60 // DB-Mongo

      const resultado = lavadoraTermodesinfectora(
        estimativaDeVolumeTotalDiarioPorMaterial, cirurgiasPorDia, leitoUTI, totalDeLavadorasTermo,
        lavadoraTermodesinfectoraMarca, lavadoraTermodesinfectoraModelo,
        lavadoraTermodesinfectoraVolumeTotalCamaraLitros, capacidadeCargaBandejasInstrumentos,
        capacidadeCargaTraqueias, tempoMedioCicloInstrumentosCargaMaximaMin,
        tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin
      )

      resultados.push(resultado)
    }
  }

  return resultados
}

export { marcasAutoclaves, marcasLavadoraTermodesinfectora }
