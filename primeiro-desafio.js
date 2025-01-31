// Questão 1
const nome = "Felipe Augusto Sousa de Almada"; // Define uma constante com o nome
console.log(nome); // Exibe o nome navegador


// Questão 2
const idade = "25"; // Define a idade como string
const altura = "1.75"; // Define a altura como string
console.log("Idade: " + idade, "Altura: " + altura); // Exibe a idade e a altura concatenadas

// Questão 3
const preco = "50"; // Define o preco do produto
const desconto = "0.2"; // Define o valor do desconto (20%)
calculo = (preco - (preco * desconto)); // Calcula o preço final com desconto
console.log("Seu desconto é: " + calculo); // Exibe o valor final no navegador

// Questão 4
let temperatura = "30"; // Define a temperatura
if (temperatura > 25) { // Verifica se a temperatura é maior que 25
    console.log("Está Calor!"); // Exibe console.loga se estiver calor
} else {
    console.log("Está Fresco!"); // Exibe console.loga se estiver fresco
}

// Questão 5
const idadeUsuario = prompt("Qual sua idade? "); // Solicita a idade do usuário
if (idadeUsuario >= 18) { // Verifica se a idade é maior que 18
    console.log("Você é maior de idade"); // Exibe mensagem se for maior de idade
} else {
    console.log("Você é menor de idade"); // Exibe mensagem se for menor de idade
}

// Questão 6
const nota = prompt("Informe uma nota de 0 a 10: "); // Solicita a nota do usuário
if(nota >= 7){ // Verifica se a nota é maior ou igual a 7
    console.log("Aprovado!"); // Exibe mensagem de aprovado
}else if(nota > 5 && nota <= 6){ // Verifica se a nota está entre 5 e 6
    console.log("Recuperação"); // Exibe mensagem de recuperação
}else{
    console.log("Reprovado"); // Exibe mensagem de reprovado
}

// Questão 7
const numero1 = prompt("1º Numero: "); // Solicita o primeiro número
const numero2 = prompt("2º Número: "); // Solicita o segundo número
if (numero1 == numero2){ // Verifica se os números são iguais
    console.log("Os números são iguais"); // Exibe mensagem se forem iguais
}else{
    console.log("Os números são diferentes"); // Exibe mensagem se forem diferentes
}

// Questão 8
const nomeUsuario = prompt("Digite seu nome: "); // Solicita o nome do usuário
const idadeInformada = prompt("Digite sua idade: "); // Solicita a idade do usuário
console.log(`Olá, meu nome é ${nomeUsuario} e eu tenho ${idadeInformada} anos`); // Exibe mensagem formatada

// Questão 9
let numero = 0;
let mensagem = ""; // Inicializa a string vazia
while (numero < 10) { // Enquanto número for menor que 10
    numero++;
    mensagem += numero + " "; // Concatena o número na mensagem
}
console.log(mensagem); // Exibe todos os números em um único console.log

// Questão 10
let cont = 1; // Inicializa contador
let num;
while(num !== 5){ // Enquanto o número não for 5
    num = parseInt(prompt(`Digite o ${cont}º número: `)); // Solicita número ao usuário
    cont++; // Incrementa o contador
}

// Questão 11
let tabuada = "";
for(let i = 0; i < 11; i++){ // Laço de repetição de 0 a 10
    let resultado = (`7 * ${i} = ${7*i}`); // Calcula a tabuada do 7
    tabuada += resultado + "\n"; // Concatena o resultado com quebra de linha
}
console.log(tabuada); // Exibe a tabuada no console.loga

// Questão 12
let numeros = "";
for (let i = 0; i < 21 ; i++) { // Percorre números de 0 a 20
    if (i % 2 === 0){ // Verifica se o número é par
        numeros += i + " "; // Concatena os números pares na string
    }    
}
console.log("Números Pares de 0 a 20: " + numeros); // Exibe os números pares

// Questão 13
function areacirculo(raio) { // Função que calcula a área do círculo
    return Math.PI * Math.pow(raio, 2); // Fórmula da área do círculo
}
let raioCirculo = parseFloat(prompt("Raio: ")); // Solicita o raio do usuário
const resultadoArea = areacirculo(raioCirculo); // Chama a função e armazena o resultado
console.log("Área do Círculo: " + resultadoArea.toFixed(2)); // Exibe a área arredondada

// Questão 14
let num1 = parseInt(prompt("1º número: ")); // Solicita o primeiro número
let num2 = parseInt(prompt("2º número: ")); // Solicita o segundo número
let soma = num1 + num2; // Calcula a soma
console.log("A soma é: " + soma); // Exibe o resultado

// Questão 15
function somar(numero1, numero2) { // Função para somar dois números
    return numero1 + numero2; // Retorna a soma
}
const primeiroNumero = 10; // Define o primeiro número
const segundoNumero = 20; // Define o segundo número
const resultadoSoma = somar(primeiroNumero, segundoNumero); // Chama a função e armazena o resultado
console.log(`O resultado da soma é: ${resultadoSoma}`); // Exibe o resultado no navegador