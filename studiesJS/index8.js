let soma = 0;
let entrada = Number(prompt("Digite um número (0 para sair):"));

while (entrada !== 0) {
  // continua enquanto o valor NÃO for 0
  soma += entrada; // acumula
  entrada = Number(prompt("Digite outro número (0 para sair):"));
}

console.log(`Soma total: ${soma}`);
