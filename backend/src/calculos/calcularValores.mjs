import { marcasAutoclaves,  marcasLavadoraTermodesinfectora  } from './marcas.mjs'

const calcularValores = (
  salaCirugia,
  cirugiasPorSala,
  processamentoDeTecidos,
  cme,
  leitoUTI,
  leitoInternacaoRPA,
  totalDeAutoclaves,
  totalDeLavadorasTermo
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
