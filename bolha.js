var valores = [82, 5, 10, 22, 45, 52, 50, 72, 70, 80];

function ordena() {
  let inicio = 0;
  let fim = 9;
  let tmp;

  for (vezes = 0; vezes < 9; vezes++){
    for (pos = inicio; pos < fim - 1; pos++) {
        if (valores[pos] > valores[pos + 1]) {
          tmp = valores[pos];
          valores[pos] = valores[pos + 1];
          valores[pos + 1] = tmp;
        }
      }
  }
}

ordena();
console.log("vetor ordenado");
console.log(valores);
