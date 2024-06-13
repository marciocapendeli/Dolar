
function converter() {
    let realInput = document.querySelector('.real');
    let dolarInput = document.querySelector('.dolar');
    let paragrafo = document.querySelector('.paragrafo');

    let valorReal = parseFloat(realInput.value);
    console.log('Valor em Reais:', valorReal);
    
    let valorDolar = parseFloat(dolarInput.value);
    console.log('Valor em Dólar:', valorDolar);
    
    if (!isNaN(valorReal) && !isNaN(valorDolar) && valorDolar !== 0) {
        let valorConvertido = valorReal / valorDolar;
        paragrafo.textContent = `$ ${valorConvertido.toFixed(2)}`;
    } else {
        paragrafo.textContent = 'Valor inválido. Por favor, insira números válidos.';
    }
}


/*

Explicação do addEventListener
A função addEventListener é usada para registrar uma função que será executada quando um evento específico ocorre em um elemento. Essa abordagem é preferida em muitos casos porque permite adicionar múltiplos ouvintes de eventos ao mesmo elemento sem sobrescrever eventos anteriores. Também separa claramente o comportamento (JavaScript) da estrutura (HTML).

document.addEventListener('DOMContentLoaded', function() {
    const botao = document.querySelector('.botao');
    const realInput = document.querySelector('.real');
    const dolarInput = document.querySelector('.dolar');
    const paragrafo = document.querySelector('.paragrafo');

    botao.addEventListener('click', function() {
        // Obtém o valor em Reais e converte para número
        const valorReal = parseFloat(realInput.value);
        console.log('Valor em Reais:', valorReal);
        
        // Obtém o valor em Dólar e converte para número
        const valorDolar = parseFloat(dolarInput.value);
        console.log('Valor em Dólar:', valorDolar);
        
        // Verifica se os valores são válidos
        if (!isNaN(valorReal) && !isNaN(valorDolar) && valorDolar !== 0) {
            // Calcula o valor em Reais equivalente ao valor em Dólar
            const valorConvertido = valorReal / valorDolar;
            
            // Exibe o resultado formatado com duas casas decimais
            paragrafo.textContent = `$ ${valorConvertido.toFixed(2)}`;
        } else {
            // Caso algum dos campos não seja um número válido
            paragrafo.textContent = 'Valor inválido. Por favor, insira números válidos.';
        }
    });
});

*/
