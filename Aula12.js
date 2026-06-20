//1. Crie uma função `saudacao` que retorna outra função com um nome como argumento e imprime: "Olá, [nome]!".
function saudacao (nome) {
    function mensagem () {
        console.log (`Olá, ${nome}!`);}
    mensagem();
}
saudacao("André");

//2. Construa uma função chamada `multiplicador(x)` que retorna outra função. Esta deve multiplicar o valor recebido por `x`.
function multiplicador (x) {
    return function operacao (y) {
        console.log (`Resultado: ${x * y}`);
    }
}
multiplicador(4)(5);

//3. Explique com suas palavras o que é um closure e por que ele é útil.
//É útil porque as varíaveis da função externa não precisam ser repetidas na função interna, porque o "closure" permite que a função interna tenha acesso a função externa. 

//4. Qual será o resultado do código abaixo?
function criarContador() {
let i = 0;
return function() {
return ++i;
}
}
let c1 = criarContador();
let c2 = criarContador();
console.log(c1()); // 1
console.log(c1()); // 2
console.log(c2()); // 1