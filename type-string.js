const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura123!";
const StringDeNumeros = "34567";

const citacao = 'o Leo disse "oi"';
console.log(citacao);

const citacao2 = " e o Rafa disse 'tudo bem'";
console.log(citacao2);  

//concatenação (+)

console.log(citacao + citacao2);

//template string OU template literal

//Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senh = "minhaSenha123";
console.log(senh.length) // 13 caracteres
