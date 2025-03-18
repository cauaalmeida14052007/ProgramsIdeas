function calculateFinalAmount() {
    // Obtém os valores dos campos de entrada
    const capital = parseFloat(document.getElementById('capital').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);

    // Verifica se os valores são válidos
    if (isNaN(capital) || isNaN(rate) || isNaN(time)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calcula o valor final usando a fórmula de juros compostos
    const finalAmount = capital * Math.pow((1 + rate), time);

    // Exibe o valor final no campo de entrada correspondente
    document.getElementById('finalAmount').value = `$ ${finalAmount.toFixed(2)}`;
}