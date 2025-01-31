const readlineSync = require('readline-sync'); // Importa a biblioteca readline-sync para capturar entradas do usuário no terminal

// Questão 1
const nome = "Felipe Augusto Sousa de Almada"; // Define uma constante com o nome
console.log(nome); // Exibe o nome no console

// Questão 2
const idade = 25; // Define a idade como número
const altura = 1.75; // Define a altura como número decimal
console.log("Idade: " + idade, "Altura: " + altura); // Exibe a idade e a altura concatenadas no console

// Questão 3
const preco = 50; // Define o preço do produto
const desconto = 0.2; // Define o valor do desconto (20%)
const calculo = preco - (preco * desconto); // Calcula o preço final aplicando o desconto
console.log("Seu desconto é: " + calculo); // Exibe o valor final no console

// Questão 4
let temperatura = 30; // Define a temperatura
if (temperatura > 25) { // Verifica se a temperatura é maior que 25 graus
    console.log("Está Calor!"); // Exibe mensagem se estiver calor
} else {
    console.log("Está Fresco!"); // Exibe mensagem se estiver fresco
}

// Questão 5
const idadeUsuario = parseInt(readlineSync.question("Qual sua idade? ")); // Solicita a idade do usuário e converte para número inteiro
if (idadeUsuario >= 18) { // Verifica se a idade é maior ou igual a 18
    console.log("Você é maior de idade"); // Exibe mensagem se for maior de idade
} else {
    console.log("Você é menor de idade"); // Exibe mensagem se for menor de idade
}

// Questão 6
const nota = parseFloat(readlineSync.question("Informe uma nota de 0 a 10: ")); // Solicita uma nota e converte para número decimal
if (nota >= 7) { // Verifica se a nota é maior ou igual a 7
    console.log("Aprovado!"); // Exibe "Aprovado!" se a condição for verdadeira
} else if (nota > 5 && nota <= 6) { // Verifica se a nota está entre 5 e 6
    console.log("Recuperação"); // Exibe "Recuperação" se a condição for verdadeira
} else {
    console.log("Reprovado"); // Exibe "Reprovado" se a nota for menor ou igual a 5
}

// Questão 7
const numero1 = readlineSync.question("1- Numero: "); // Solicita o primeiro número ao usuário
const numero2 = readlineSync.question("2- numero: "); // Solicita o segundo número ao usuário
if (numero1 == numero2) { // Compara os dois números
    console.log("Os numeros são iguais"); // Exibe mensagem se forem iguais
} else {
    console.log("Os numeros são diferentes"); // Exibe mensagem se forem diferentes
}

// Questão 8
const nomeUsuario = readlineSync.question("Digite seu nome: "); // Solicita o nome do usuário
const idadeInformada = readlineSync.question("Digite sua idade: "); // Solicita a idade do usuário
console.log(`Olá, meu nome é ${nomeUsuario} e eu tenho ${idadeInformada} anos`); // Exibe a mensagem formatada

// Questão 9
let numero = 0; // Inicializa a variável número com 0
let mensagem = ""; // Inicializa uma string vazia para armazenar os números
while (numero < 10) { // Enquanto número for menor que 10
    numero++; // Incrementa o número
    mensagem += numero + " "; // Concatena o número na mensagem
}
console.log(mensagem); // Exibe todos os números em um único console.log

// Questão 10
let cont = 1; // Inicializa contador para controlar a quantidade de tentativas
let num; // Declara variável para armazenar o número digitado pelo usuário
while(num !== 5) { // Enquanto o número digitado for diferente de 5
    num = parseInt(readlineSync.question(`Digite o ${cont}- numero: `)); // Solicita número ao usuário e converte para inteiro
    cont++; // Incrementa o contador
}

// Questão 11
let tabuada = ""; // Inicializa uma string vazia para armazenar a tabuada
for (let i = 0; i < 11; i++) { // Laço de repetição de 0 a 10
    let resultado = (`7 * ${i} = ${7 * i}`); // Calcula a multiplicação do número 7 pelo índice do laço
    tabuada += resultado + "\n"; // Concatena o resultado com quebra de linha
}
console.log(tabuada); // Exibe a tabuada no console

// Questão 12
let numeros = ""; // Inicializa uma string vazia para armazenar os números pares
for (let i = 0; i < 21; i++) { // Percorre os números de 0 a 20
    if (i % 2 === 0) { // Verifica se o número é par
        numeros += i + " "; // Concatena o número par na string
    }    
}
console.log("numeros Pares de 0 a 20: " + numeros); // Exibe os números pares

// Questão 13
function areacirculo(raio) { // Declara a função que calcula a área do círculo
    return Math.PI * Math.pow(raio, 2); // Retorna o resultado da fórmula π * r²
}
let raioCirculo = parseFloat(readlineSync.question("Raio: ")); // Solicita o raio e converte para número decimal
const resultadoArea = areacirculo(raioCirculo); // Chama a função e armazena o resultado
console.log("Área do Círculo: " + resultadoArea.toFixed(2)); // Exibe a área do círculo arredondada para duas casas decimais

// Questão 14
let num1 = parseInt(readlineSync.question("1- numero: ")); // Solicita o primeiro número e converte para inteiro
let num2 = parseInt(readlineSync.question("2- numero: ")); // Solicita o segundo número e converte para inteiro
let soma = num1 + num2; // Soma os dois números
console.log("A soma é: " + soma); // Exibe o resultado da soma

// Questão 15
function somar(numero1, numero2) { // Declara a função que soma dois números
    return numero1 + numero2; // Retorna a soma dos dois números
}
const primeiroNumero = 10; // Define o primeiro número como 10
const segundoNumero = 20; // Define o segundo número como 20
const resultadoSoma = somar(primeiroNumero, segundoNumero); // Chama a função e armazena o resultado
console.log(`O resultado da soma é: ${resultadoSoma}`); // Exibe o resultado da soma formatado
