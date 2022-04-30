var valores = [5, 8, 10, 22, 45, 38, 50, 60, 70, 80];

function buscar(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i;
    }
  }
  return -1;
}

function buscaBin(num) {
  let inicio, fim;
  let meio;
  inicio = 0;
  fim = 9;
  while (inicio <= fim) {
    meio = parseInt((inicio + fim) / 2);
    if (num == valores[meio]) {
      return meio;
    } else {
      if (num > valores[meio]) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }
  }
  return -1;
}

//usar ferrementa de busca

console.log(buscaBin(10));
console.log(buscaBin(60));
