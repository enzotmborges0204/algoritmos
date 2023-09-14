// Declaração de uma matriz (array) chamada 'numeros' contendo seis números.
const numeros = [56, 23, 78, 42, 99, 10];

// Inicialização da variável 'maior' com o primeiro elemento da matriz 'numeros'.
let maior = numeros[0];

// Inicialização da variável 'i' com o valor 1 para iniciar um loop enquanto.
let i = 1;

// Início de um loop 'while' que percorre os elementos da matriz 'numeros'.
while (i < numeros.length) {
  // Dentro do loop, verifica-se se o elemento atual (numeros[i]) é maior que o valor armazenado em 'maior'.
  if (numeros[i] > maior) {
    // Se o elemento atual for maior, atualiza-se o valor de 'maior' com o valor do elemento atual.
    maior = numeros[i];
  }

  // Incrementa a variável 'i' para prosseguir para o próximo elemento da matriz.
  i++;
}

// Após o loop, imprime a mensagem com o maior número encontrado na matriz.
console.log("O maior número na matriz é: " + maior);
