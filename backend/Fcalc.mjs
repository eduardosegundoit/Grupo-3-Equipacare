const calcularValores = (
  salaCirugia, // 12
  cirugiasPorSala, // 6
  processamentoDeTecidos, // true
  // dia, // 7   //<---
  // cme, // 12  //tempo entre uma limpeza e outra <--
  leitoUTI, // 30
  leitoInternacaoRPA, // 149
  // totalDeAutoclaves, // 3     // <--
  // totalDeLavadorasTermo // 2 // <--
) => {
  const volumePorCirugia = 1.5
  const cirugiasPorDia = salaCirugia*cirugiasPorSala
  const volumeTotalDiarioSalasCirugiacas = cirugiasPorDia * volumePorCirugia
  console.log(`Volume Total Diário - Cirurgias : ${volumeTotalDiarioSalasCirugiacas}`)

  const volumePorDiaDeLeitoUTI = 0.5
  const volumeTotalPorDiaUTI = volumePorDiaDeLeitoUTI * leitoUTI
  console.log(`Volume Total Diário - UTIs : ${volumeTotalPorDiaUTI}`)

  const volumePorDiaDeLeitoDeInternacao = 0.05
  const volumeTotalDiarioInternacao = volumePorDiaDeLeitoDeInternacao * leitoInternacaoRPA
  console.log(`Volume Total Diário - Internação : ${volumeTotalDiarioInternacao}`)

  const estimativaDeVolumeTotalDiarioPorMaterial = volumeTotalDiarioSalasCirugiacas + volumeTotalPorDiaUTI + volumeTotalDiarioInternacao

  const UE = 54
  const estimativaDeVolumeTotalDiarioUE = processamentoDeTecidos ? estimativaDeVolumeTotalDiarioPorMaterial * 2 : estimativaDeVolumeTotalDiarioPorMaterial
  const estimativaDeVolumeTotalDiarioLitros = estimativaDeVolumeTotalDiarioUE * UE
  return[
    `Estimativa Volume Total Diário por Material : ${estimativaDeVolumeTotalDiarioPorMaterial}`,
    `ESTIMATIVA DE VOLUME TOTAL DIÁRIO UE: ${estimativaDeVolumeTotalDiarioUE}`,
    `ESTIMATIVA DE VOLUME TOTAL DIÁRIO litros: ${estimativaDeVolumeTotalDiarioLitros}`,
  ]
}

export { calcularValores }
