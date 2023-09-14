const numeros = [56, 23, 78, 42, 99, 10];
let maior = numeros[0];
let i = 1;
while (i < numeros.length) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  i++;
}
console.log("O maior número na matriz é: " + maior);
