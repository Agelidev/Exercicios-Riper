//1. Crie uma Promise que resolva com uma mensagem após 3 segundos.
let promessa = new Promise((resolve, reject) => {
setTimeout(() => resolve("Concluído"), 3000);
});

//2. Use `.then()` para mostrar a mensagem no console.
promessa.then(res => console.log(res));

//3. Reescreva o exercício anterior usando `async` e `await`.
function esperar(tempo) {
    return new Promise(resolve => setTimeout(resolve, tempo));
}

async function executar() {
    console.log("Iniciou");
await esperar(3000);
    console.log("Acabou");
}
executar();

//4. (Desafio) Crie uma função `carregarDados()` que simula uma requisição assíncrona com delay e trate erro com `try/catch`

async function carregarDados() {
    try {
        await new Promise((resolve, reject) => setTimeout(() => reject("Erro na carga"), 2000));
    } catch (erro) {
        console.log(erro);
    }
}

carregarDados();
