function verificarNumeroPerfeito(numero) {
  let somaDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      somaDivisores += i;
    }
  }

  if (somaDivisores === numero) {
    return true;
  } else {
    return false;
  }
}

const numero = parseInt(prompt("Digite um número inteiro:"));

if (verificarNumeroPerfeito(numero)) {
  console.log(numero + " é um número perfeito.");
} else {
  console.log(numero + " não é um número perfeito.");
}
