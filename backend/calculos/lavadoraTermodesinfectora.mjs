const lavadoraTermodesinfectora = (
  estimativaDeVolumeTotalDiarioPorMaterial,
  cirugiasPorDia,
  leitoUTI,
  totalDeLavadorasTermo,

  marca,
  modelo,
  volumeTotalCamaraLitros,
  capacidadeCargaBandejasInstrumentos,
  capacidadeCargaTraqueias,
  tempoMedioCicloInstrumentosCargaMaximaMin,
  tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin
) => {
  const producaoUesInstrumentosDia = estimativaDeVolumeTotalDiarioPorMaterial
  const numeroCirurgiasDia = cirugiasPorDia
  const numeroLeitosUti = leitoUTI

  const numeroBandejasPorUe = 2 // talvez esteja no DB-Mongo
  const capacidadeProcessamentoUeCargaInstrumentos = capacidadeCargaBandejasInstrumentos / numeroBandejasPorUe
  const numeroCiclosNecessariosDiariamenteInstrumentos = producaoUesInstrumentosDia / capacidadeProcessamentoUeCargaInstrumentos
  const intervaloMedioEntreCiclos = 10 // talvez esteja no DB-Mongo

  const tempoNecessarioProcessarDemandaInstrumentosMin = numeroCiclosNecessariosDiariamenteInstrumentos * (tempoMedioCicloInstrumentosCargaMaximaMin + intervaloMedioEntreCiclos)

  const quantidadeTraqueiasPorCirurgia = 3 // talvez esteja no DB-Mongo
  const quantidadeTraqueiasPorDiaCirurgias = numeroCirurgiasDia * quantidadeTraqueiasPorCirurgia
  const quantidadeTraqueiasPorLeitoUtiDia = 3 // talvez esteja no DB-Mongo
  const quantidadeTraqueiasPorDiaUti = numeroLeitosUti * quantidadeTraqueiasPorLeitoUtiDia
  const quantidadeTraqueiasPorDiaTotal = quantidadeTraqueiasPorDiaCirurgias + quantidadeTraqueiasPorDiaUti

  const numeroCiclosNecessariosDiariamenteAssistenciaVentilatoria = quantidadeTraqueiasPorDiaTotal / capacidadeCargaTraqueias
  const tempoNecessarioProcessarDemandaAssistenciaVentilatoriaMin = numeroCiclosNecessariosDiariamenteAssistenciaVentilatoria * (tempoMedioCicloAssistenciaVentilatoriaCargaMaximaMin  + intervaloMedioEntreCiclos)

  const demandaCiclosPorDia = numeroCiclosNecessariosDiariamenteAssistenciaVentilatoria + numeroCiclosNecessariosDiariamenteInstrumentos
  const demandaTempoPorDiaMin = tempoNecessarioProcessarDemandaInstrumentosMin + tempoNecessarioProcessarDemandaAssistenciaVentilatoriaMin

  const minutosDisponiveisDiariamenteTodosEquipamentos = 60 * 24 * totalDeLavadorasTermo
  const percentualUtilizacaoCapacidadeMaximaProcessamentoTermos = demandaTempoPorDiaMin / minutosDisponiveisDiariamenteTodosEquipamentos
  const percentualUtilizacaoCapacidadeMaximaProcessamentoTermosFormatado = (percentualUtilizacaoCapacidadeMaximaProcessamentoTermos * 100)

  const resultado = `${marca}, ${modelo}: ${parseInt(minutosDisponiveisDiariamenteTodosEquipamentos)}, ${percentualUtilizacaoCapacidadeMaximaProcessamentoTermosFormatado.toFixed(2)}%`

  return resultado
}

export { lavadoraTermodesinfectora }
