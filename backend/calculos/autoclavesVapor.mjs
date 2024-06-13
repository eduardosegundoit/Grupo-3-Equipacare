const autoclavesVapor = (
  estimativaDeVolumeTotalDiarioLitros,
  cme,
  totalDeAutoclaves
) => {
  const marca = 'A';
  const modelo = 'a1';

  // Volume Total da Câmara [litros]
  const volumeTotalCamaraLitros = 102 // DB-Mongo

  // Volume Útil da Câmara (capacidade de carga) [litros]
  const volumeUtilCamaraLitros = 81 // DB-Mongo

  // Tempo Total Médio do Ciclo Alta Temperatura incluindo Secagem (carga máxima) [minutos]
  const tempoTotalMedioCicloAltaTemperaturaMin = 50 // DB-Mongo

  // Tempo de Carga e Descarga [minutos]
  const tempoCargaDescargaMin = 10 // talvez esteja no DB-Mongo

  // Tempo do Ciclo considerando Carga e Descarga [minutos]
  const tempoCicloConsiderandoCargaDescargaMin = tempoCargaDescargaMin+tempoTotalMedioCicloAltaTemperaturaMin

  // Tempo para teste diário de B&D [minutos]
  const tempoTesteDiarioBDMin = 30 // talvez esteja no DB-Mongo

  // Tempo para procedimento diário de aquecimento máquina fria [minutos]
  const tempoProcedimentoDiarioAquecimentoMin = 20 // DB-Mongo

  // Tempo Disponível diário
  const tempoDisponivelDiarioMin = (24 * 60)-(tempoProcedimentoDiarioAquecimentoMin+tempoTesteDiarioBDMin)

  // Produção do Hospital: volume diário de material [litros]
  const producaoHospitalVolumeDiarioLitros = estimativaDeVolumeTotalDiarioLitros

  // Volume que precisará ser processado no intervalo de "pico" (90% do total diário) [litros]
  const volumeProcessadoPicoLitros = producaoHospitalVolumeDiarioLitros * 0.9

  // Intervalo diário de " Pico" (90% do material é processado)
  const intervaloDiarioPico = (cme*60)-(tempoTesteDiarioBDMin+tempoProcedimentoDiarioAquecimentoMin)

  // Número Máximo de Ciclos por Dia (capacidade máxima diária)
  const numeroMaximoCiclosDia = tempoDisponivelDiarioMin/tempoCicloConsiderandoCargaDescargaMin

  // Número Máximo de Ciclos durante intervalo de "pico" (capacidade)
  const numeroMaximoCiclosPico = intervaloDiarioPico/tempoCicloConsiderandoCargaDescargaMin

  // % Aproveitamento Câmara
  const percentualAproveitamentoCamara = volumeTotalCamaraLitros

  // Número de Autoclaves
  const numeroAutoclaves = volumeUtilCamaraLitros

  // Número de Autoclaves quando uma estiver em manutenção
  const numeroAutoclavesManutencao = volumeUtilCamaraLitros/percentualAproveitamentoCamara

  // Capacidade de processamento no intervalo de pico da CME com todas autoclaves funcionando [litros]
  const capacidadeProcessamentoPicoAutoclavesLitros = totalDeAutoclaves

  // Caso uma das autoclaves esteja em manutenção, quantas horas de trabalho serão necessário para atender o volume total?
  // Ideal < 20 horas / dia
  const horasNecessariasManutencaoAutoclaveDia = capacidadeProcessamentoPicoAutoclavesLitros-1

  // Percentual de utilização da capacidade de todas as autoclaves durante intervalo de pico
  // Ideal < 90%
  const percentualUtilizacaoCapacidadeAutoclavesPico = (capacidadeProcessamentoPicoAutoclavesLitros*numeroAutoclaves*numeroMaximoCiclosPico)

  const horasNecessariasParaManutencao = ((((producaoHospitalVolumeDiarioLitros/numeroAutoclaves)*tempoCicloConsiderandoCargaDescargaMin)+tempoTesteDiarioBDMin+tempoProcedimentoDiarioAquecimentoMin)/60)/horasNecessariasManutencaoAutoclaveDia
  const percentualUtilizacaoMaxima = volumeProcessadoPicoLitros/percentualUtilizacaoCapacidadeAutoclavesPico
  // return `${marca} ${modelo} : ${volumeTotalCamaraLitros}, ${volumeUtilCamaraLitros}, ${tempoTotalMedioCicloAltaTemperaturaMin}, ${tempoCargaDescargaMin}, ${tempoCicloConsiderandoCargaDescargaMin}, ${tempoTesteDiarioBDMin}, ${tempoProcedimentoDiarioAquecimentoMin}, ${tempoDisponivelDiarioMin}, ${producaoHospitalVolumeDiarioLitros}, ${volumeProcessadoPicoLitros}, ${intervaloDiarioPico}, ${numeroMaximoCiclosDia}, ${numeroMaximoCiclosPico}, ${percentualAproveitamentoCamara}, ${numeroAutoclaves}, ${numeroAutoclavesManutencao}, ${capacidadeProcessamentoPicoAutoclavesLitros}, ${horasNecessariasManutencaoAutoclaveDia}, ${percentualUtilizacaoCapacidadeAutoclavesPico}`
  return `${horasNecessariasParaManutencao}, ${percentualUtilizacaoMaxima}`
}

export { autoclavesVapor }
