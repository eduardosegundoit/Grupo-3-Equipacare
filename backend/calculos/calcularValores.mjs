import { marcasAutoclaves,  marcasLavadoraTermodesinfectora  } from './marcas.mjs'

const calcularValores = (
  salaCirugia, // 12
  cirugiasPorSala, // 6
  processamentoDeTecidos, // true
  dia, // 7   //<---
  cme, // 12  //tempo entre uma limpeza e outra <--
  leitoUTI, // 30
  leitoInternacaoRPA, // 149
  totalDeAutoclaves, // 3     // <--
  totalDeLavadorasTermo // 2 // <--
) => {
  const volumePorCirugia = 1.5
  const cirugiasPorDia = salaCirugia*cirugiasPorSala
  const volumeTotalDiarioSalasCirugiacas = cirugiasPorDia * volumePorCirugia

  const volumePorDiaDeLeitoUTI = 0.5
  const volumeTotalPorDiaUTI = volumePorDiaDeLeitoUTI * leitoUTI

  const volumePorDiaDeLeitoDeInternacao = 0.05
  const volumeTotalDiarioInternacao = volumePorDiaDeLeitoDeInternacao * leitoInternacaoRPA

  const estimativaDeVolumeTotalDiarioPorMaterial = volumeTotalDiarioSalasCirugiacas + volumeTotalPorDiaUTI + volumeTotalDiarioInternacao

  const UE = 54
  const estimativaDeVolumeTotalDiarioUE = processamentoDeTecidos ? estimativaDeVolumeTotalDiarioPorMaterial * 2 : estimativaDeVolumeTotalDiarioPorMaterial
  const estimativaDeVolumeTotalDiarioLitros = estimativaDeVolumeTotalDiarioUE * UE

  const autoclave = marcasAutoclaves(estimativaDeVolumeTotalDiarioLitros, cme, totalDeAutoclaves)
  const lavadora =  marcasLavadoraTermodesinfectora(estimativaDeVolumeTotalDiarioPorMaterial, cirugiasPorDia, leitoUTI, totalDeLavadorasTermo)
  return {autoclave,lavadora}
}

export { calcularValores }
