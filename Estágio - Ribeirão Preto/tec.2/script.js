// Função para contar a ocorrência da letra 'a'
function countLetterA(str) {
    const lowerCaseStr = str.toLowerCase(); // Converte a string para minúsculas
    let count = 0;

    for (const char of lowerCaseStr) {
        if (char === 'a') {
            count++;
        }
    }

    return count;
}

// Função chamada quando o formulário é enviado
function handleFormSubmit(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    const inputStr = document.getElementById('userInput').value;
    const count = countLetterA(inputStr);
    document.getElementById('result').textContent = `A letra 'a' aparece ${count} vezes na string.`;
}

// Adiciona um listener para o evento de envio do formulário
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inputForm').addEventListener('submit', handleFormSubmit);
});
