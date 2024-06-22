const autoclavesVapor = (
  estimativaDeVolumeTotalDiarioLitros,
  cme,
  totalDeAutoclaves,

  marca,
  modelo,
  volumeTotalCamaraLitros,
  volumeUtilCamaraLitros,
  tempoTotalMedioCicloAltaTemperaturaMin,
  tempoProcedimentoDiarioAquecimentoMin
) => {
  const tempoCargaDescargaMin = 10
  const tempoCicloConsiderandoCargaDescargaMin = tempoCargaDescargaMin+tempoTotalMedioCicloAltaTemperaturaMin
  const tempoTesteDiarioBDMin = 30
  const tempoDisponivelDiarioMin = (24 * 60)-(tempoProcedimentoDiarioAquecimentoMin+tempoTesteDiarioBDMin)

  const producaoHospitalVolumeDiarioLitros = estimativaDeVolumeTotalDiarioLitros
  const volumeProcessadoPicoLitros = producaoHospitalVolumeDiarioLitros * 0.9
  const intervaloDiarioPico = (cme * 60)-(tempoTesteDiarioBDMin+tempoProcedimentoDiarioAquecimentoMin)
  const numeroMaximoCiclosDia = tempoDisponivelDiarioMin / tempoCicloConsiderandoCargaDescargaMin
  const numeroMaximoCiclosPico = intervaloDiarioPico / tempoCicloConsiderandoCargaDescargaMin

  const percentualAproveitamentoCamara = volumeTotalCamaraLitros
  const numeroAutoclaves = volumeUtilCamaraLitros

  const numeroAutoclavesManutencao = volumeUtilCamaraLitros / percentualAproveitamentoCamara
  const capacidadeProcessamentoPicoAutoclavesLitros = totalDeAutoclaves
  const horasNecessariasManutencaoAutoclaveDia = capacidadeProcessamentoPicoAutoclavesLitros - 1
  const percentualUtilizacaoCapacidadeAutoclavesPico = (capacidadeProcessamentoPicoAutoclavesLitros * numeroAutoclaves * numeroMaximoCiclosPico)
  const horasNecessariasParaManutencao = ((((producaoHospitalVolumeDiarioLitros / numeroAutoclaves) * tempoCicloConsiderandoCargaDescargaMin) + tempoTesteDiarioBDMin + tempoProcedimentoDiarioAquecimentoMin) / 60) / horasNecessariasManutencaoAutoclaveDia

  const percentualUtilizacaoMaxima = volumeProcessadoPicoLitros/percentualUtilizacaoCapacidadeAutoclavesPico
  const percentualUtilizacaoMaximaFormatado = percentualUtilizacaoMaxima * 100

  const resultado = `${marca}, ${modelo}: ${parseInt(horasNecessariasParaManutencao)} Horas, ${percentualUtilizacaoMaximaFormatado.toFixed(2)}%`

  if ( percentualUtilizacaoMaximaFormatado.toFixed(2) < 90 &&  parseInt(horasNecessariasParaManutencao) < 20) {
    return resultado
  }
}

export { autoclavesVapor }
