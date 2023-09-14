// Definição de uma função chamada 'dividir' que aceita dois parâmetros 'a' e 'b'.
function dividir(a, b) {
  try {
    // Dentro do bloco 'try', verifica-se se 'b' é igual a zero.
    if (b === 0) {
      // Se 'b' for igual a zero, é lançada uma exceção com a mensagem de erro especificada.
      throw new Error("Divisão por zero não é permitida.");
    }
    // Se 'b' não for igual a zero, realiza a divisão e retorna o resultado.
    return a / b;
  } catch (error) {
    // Se ocorrer um erro (por exemplo, divisão por zero), o bloco 'catch' é executado.
    // Exibe uma mensagem de erro no console com base na mensagem da exceção.
    console.error("Erro: " + error.message);
    // Retorna 'null' para indicar que a divisão não foi bem-sucedida.
    return null;
  }
}

// Chamada da função 'dividir' com os argumentos 10 e 0.
const resultado = dividir(10, 0);

// Verifica se o resultado não é 'null' (ou seja, se a divisão foi bem-sucedida).
if (resultado !== null) {
  // Se a divisão foi bem-sucedida, exibe o resultado no console.
  console.log("Resultado: " + resultado);
} else {
  // Se a divisão não foi bem-sucedida (resultado é 'null'), exibe uma mensagem de erro no console.
  console.log("A divisão não pôde ser realizada.");
}
