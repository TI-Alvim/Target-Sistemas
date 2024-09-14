// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    if (num < 0) {
        return false;
    }

    let a = 0, b = 1;
    while (a < num) {
        [a, b] = [b, a + b];
    }

    return a === num;
}

// Função chamada quando o formulário é enviado
function checkFibonacci(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    const num = parseInt(document.getElementById('number').value, 10);
    const resultDiv = document.getElementById('result');

    if (isNaN(num)) {
        resultDiv.textContent = "Por favor, insira um número válido.";
    } else if (isFibonacci(num)) {
        resultDiv.textContent = `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        resultDiv.textContent = `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

// Adiciona um listener para o evento de envio do formulário
document.getElementById('fibonacciForm').addEventListener('submit', checkFibonacci);
