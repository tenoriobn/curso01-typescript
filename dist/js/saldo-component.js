let saldo = 3000;
alert('Outra frase aqui');
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toString();
}
