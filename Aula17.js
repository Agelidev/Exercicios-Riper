// 1. Crie um objeto representando um aluno com nome, idade e curso.
let aluno = {nome: "Angelica", idade: 17, curso: "Desenvolvimento de sistemas"};

// 2. Converta esse objeto para JSON e exiba no console.
let alunoJSON = JSON.stringify(aluno);
console.log(alunoJSON); 

// 3. Agora transforme uma string JSON válida em objeto e acesse uma das propriedades.
const texto = '{"fruta":"Abacaxi","quantidade":10}';
const obj = JSON.parse(texto);
console.log(obj.fruta); 

// 4. (Desafio) Simule o envio de um objeto representando um pedido (produto, quantidade, valor) usando `fetch` e `JSON.stringify`
let pedido = {produto: "Teclado Mecânico", quantidade: 1, valor: 250.00};

fetch("https://api.exemplo.com/produtos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido)
});