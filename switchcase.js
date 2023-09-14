// Declaração de uma variável 'diaDaSemana' contendo o valor "quinta".
const diaDaSemana = "quinta";

// Início de uma estrutura de controle 'switch' que verifica o valor da variável 'diaDaSemana'.
switch (diaDaSemana) {
  case "segunda":
    // Se o valor de 'diaDaSemana' for "segunda", imprime uma mensagem sobre a reunião de equipe.
    console.log("Reunião de equipe às 10h.");
    // A instrução 'break' é usada para sair do switch após encontrar uma correspondência.
    break;
  case "quarta":
    // Se o valor de 'diaDaSemana' for "quarta", imprime uma mensagem sobre o treinamento de novos funcionários.
    console.log("Treinamento de novos funcionários às 14h.");
    break;
  case "quinta":
    // Se o valor de 'diaDaSemana' for "quinta", imprime uma mensagem sobre a entrega do relatório semanal.
    console.log("Entrega de relatório semanal às 16h.");
    break;
  default:
    // Se 'diaDaSemana' não corresponder a nenhum dos casos anteriores, imprime uma mensagem padrão.
    console.log("Dia livre, sem compromissos.");
}
