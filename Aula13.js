//Terminar depois o Ex. 4

// 1. Crie uma função chamada `executarDuasVezes` que recebe uma função como argumento e a executa duas vezes.

function executarDuasVezes(fn){
    for (let i = 0; i < 2; i++) {
        fn();
    }
}
executarDuasVezes(() => console.log("Funcionou"));

//2. Construa uma função chamada `criarSaudacao(saudacao)` que retorna outra função que recebe o nome da pessoa.

function criarSaudacao(saudacao){
    return function (nome) {
        return ("Olá " + nome + "!");
    }
}
let saudar = criarSaudacao();
console.log(saudar("Juliana"));
console.log(saudar("Américo"));

//3. Escreva uma função `calcular` que recebe dois números e uma função de operação (como soma, subtração etc.).

function calcular(a, b, operacao){
    return operacao(a, b);
}
let soma = (a,b) => (a + b);
let subtracao = (a,b) => (a - b);
let multiplicacao = (a,b) => (a * b);
console.log(calcular(2, 5, soma));
console.log(calcular(2, 5, subtracao));
console.log(calcular(2, 5, multiplicacao));

//4. (Desafio) Implemente uma função `compose(f, g)` que retorna uma nova função onde `f(g(x))` é executado.

function compose(f , g){
    return function(x){
        return f(g(x));
    };
}