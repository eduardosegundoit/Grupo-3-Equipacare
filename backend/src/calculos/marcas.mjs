import { autoclavesVapor } from './autoclavesVapor.mjs'
import { lavadoraTermodesinfectora } from './lavadoraTermodesinfectora.mjs'
import { marcasAutoclave } from './autoclaves.mjs'
import { marcaLavadora } from './lavadoraTermodesinfectoras.mjs'

const marcasAutoclaves = (
  estimativaDeVolumeTotalDiarioLitros,
  cme,
  totalDeAutoclaves
) => {
  const autoClaves = marcasAutoclave()
  const resultados = []

  for (let i = 0 ; i < autoClaves.length; i++) {
    for (let j = 0 ; j < autoClaves[i].length; j++) {
      const autoClavesMarca = autoClaves[i][j].marca
      const autoClavesModelo = autoClaves[i][j].modelo
      const autoClavesVolumeTotalCamaraLitros = autoClaves[i][j].volumeTotalCamaraLitros
      const volumeUtilCamaraLitros = autoClaves[i][j].volumeUtilCamaraLitros
      const tempoTotalMedioCicloAltaTemperaturaMin = autoClaves[i][j].tempoTotalMedioCicloAltaTemperaturaMin
      const tempoProcedimentoDiarioAquecimentoMin = autoClaves[i][j].tempoProcedimentoDiarioAquecimentoMin

      const resultado = autoclavesVapor(
        estimativaDeVolumeTotalDiarioLitros,
        cme,
        totalDeAutoclaves,
        autoClavesMarca,
        autoClavesModelo,
        autoClavesVolumeTotalCamaraLitros,
        volumeUtilCamaraLitros,
        tempoTotalMedioCicloAltaTemperaturaMin,
        tempoProcedimentoDiarioAquecimentoMin
      )

      resultado !== undefined && resultados.push(resultado)
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

  const lavadoraTermodes =  marcaLavadora()
  const resultados = []

  for (let i = 0 ; i < lavadoraTermodes.length; i++) {
    for (let j = 0 ; j < lavadoraTermodes[i].length; j++) {
      const lavadoraTermodesinfectoraMarca = lavadoraTermodes[i][j].marca
      const lavadoraTermodesinfectoraModelo = lavadoraTermodes[i][j].modelo
      const lavadoraTermodesinfectoraVolumeTotalCamaraLitros = lavadoraTermodes[i][j].volumeTotalCamaraLitros
      const capacidadeCargaBandejasInstrumentos = lavadoraTermodes[i][j].capacidadeCargaBandejasInstrumentos
      const capacidadeCargaTraqueias = lavadoraTermodes[i][j].capacidadeCargaTraqueias
      const tempoMedioCicloInstrumentosCargaMaximaMin = lavadoraTermodes[i][j].tempoMedioCicloInstrumentosCargaMaximaMin
      const tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin = lavadoraTermodes[i][j].tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin

      const resultado = lavadoraTermodesinfectora(
        estimativaDeVolumeTotalDiarioPorMaterial,
        cirurgiasPorDia,
        leitoUTI,
        totalDeLavadorasTermo,
        lavadoraTermodesinfectoraMarca,
        lavadoraTermodesinfectoraModelo,
        lavadoraTermodesinfectoraVolumeTotalCamaraLitros,
        capacidadeCargaBandejasInstrumentos,
        capacidadeCargaTraqueias,
        tempoMedioCicloInstrumentosCargaMaximaMin,
        tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin
      )

      resultado !== undefined && resultados.push(resultado)
    }
  }

  return resultados
}


export { marcasAutoclaves, marcasLavadoraTermodesinfectora }
