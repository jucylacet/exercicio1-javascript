//1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 

//let nome = prompt("escreva seu nome");
//alert(nome);

//2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.

//let num1 = parseInt(prompt("digite um numero"));
//let num2 = parseInt(prompt("digite outro numero"));

//console.log(num1+num2);

//3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.

//let nota1 = parseFloat(prompt("digite primeira nota"));
//let nota2 = parseFloat(prompt("digite segunda nota"));

//console.log((nota1 + nota2)/2);

//4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.

//let anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));
//var anoAtual = new Date().getFullYear();;

//console.log(anoAtual - anoNascimento)

//5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas 
//trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

//let ganhoHora = parseFloat(prompt("Quanto você ganha por hora?"));
//let horasMes = parseFloat(prompt("Quanto horas você trabalhou no mês?"));
//let ganhoMes = (ganhoHora * horasMes);

//console.log("Você ganhou R$" + ganhoMes + " por horas trabalhadas");

//6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a 
//temperatura em graus Celsius.    C = 5 * ((F-32) / 9).

//let tempFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
//let conversorTemp = 5 * ((tempFahrenheit - 32)/9);

//console.log(conversorTemp + "º celcius");

// EstruturaDeDecisao

//    1.	Faça um Programa que peça dois números e imprima o maior deles.

//let num1= parseInt(prompt("Digite um numero inteiro:"));
//let num2= parseInt(prompt("Digite outro numero inteiro:"));
//let maiorValor = Math.max(num1,num2);

//console.log("O maior valor é " + maiorValor);

//2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

//let num = parseInt(prompt("Digite um numero"));

//if (num > 0) {
//    console.log("o numero é positivo")
//} else {
//    console.log("o numero é negativo")
//   }

//3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever:
// F - Feminino, M - Masculino, Sexo Inválido.

//let sexo = prompt("Digite o sexo");

//if (sexo == "F" || sexo === "f") {
//    console.log("Feminino")
//} else if (sexo == "M" || sexo === "m") {
//    console.log ("Masculino")
//} else {
//    console.log("sexo inválido")
//}

//4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a 
// média alcançada por aluno e apresentar:
//1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//2.	A mensagem "Reprovado", se a média for menor do que sete;
//3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.

//let nota1 = parseFloat(prompt("Digite primeira nota"));
//let nota2 = parseFloat(prompt("Digite segunda nota"));
//let mediaFinal = (nota1 + nota2)/2;

//if(mediaFinal==10) {
  //  console.log("Aprovado com Distinção")
//} else if (mediaFinal<=9.9||mediaFinal>=7) {
//    console.log ("Aprovado")
//} else {
//    console.log("Reprovado")
//};

//5.	Faça um Programa que leia três números e mostre o maior e o menor deles.

//let valor1 = parseInt(prompt("Digite um número inteiro: "));
//let valor2 = parseInt(prompt("Digite outro número inteiro: "));
//let valor3 = parseInt(prompt("Digite outro número inteiro: "));
//let maiorValor = Math.max(valor1,valor2,valor3);
//let menorValor = Math.min(valor1,valor2,valor3);

//console.log("O maior número digitado foi " + maiorValor + " e o menor número digitado foi " + menorValor);

//6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.

let num1 = parseInt(prompt("Digite um numero"));
let num2 = parseInt(prompt("Digite outro numero"));

let resto1 = num1 % 2;
let resto2 = num2 % 2;

console.log('1:', resto1, ' 2:', resto2)
if (resto1 === 0 && resto2 === 0) {
  console.log("os numeros são pares")
}
if (resto1 !== 0 && resto2 !== 0) {
   console.log("os números são ímpares")
}
if(resto1 !== resto2){
    console.log('os numeros são pares e impares')
}