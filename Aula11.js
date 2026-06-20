// 1. Explique a diferença entre escopo de função e de bloco.  
//Escopo de função: É quando uma variável pode ser usada somente dentro de uma função.
//Escopo de bloco: São variáveis let e const que podem ser usadas dentro de blocos de tomada de decisão condicional (if) e repetição (for e while).


// 2. Analise o código a seguir e diga o que será impresso:
var x = 1;
function teste() {
console.log(x);
var x = 2;
console.log(x);
}
teste();
//Ao chamar a função o primeiro console.log aparece como undefined, pq x está inicialmente definido globalmente e não dentro da função, depois quando x é definido na função o segundo console.log é exibido sem erros como "2".

// 3. Reescreva o seguinte código com let para evitar problemas de hoisting:
function exemplo() {
let nome;
    if (true) {
        nome = "Ana";
    }
console.log(nome);
}


// 4. Desafio: explique por que o código abaixo imprime 3, 3, 3 e como corrigir:
for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 100);
}
//Se o var for substituído pelo let o código exibe "0,1,2" e isso acontece por causa dos escopos (global e de blocos respectivamente) e porque o loop roda tudo e lê várias vezes só o final quando com o var.