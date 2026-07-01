// 1. Dado um array de números, use `map` para criar um novo array com o quadrado de cada número.
let numeros = [2, 6, 25];
let quadrado = numeros.map(n => n * n);
console.log(quadrado);

// 2. Use `filter` para extrair os nomes com mais de 5 letras do array:
const nomes = ['João', 'Fernanda', 'Carlos', 'Eva'];
let cincoLetras = nomes.filter(n => n.length > 5);
console.log(cincoLetras);

// 3. Some todos os elementos de um array de preços com `reduce`:
const precos = [10.5, 22.3, 18.4];
let soma = precos.reduce((acc, atual) => acc + atual, 0);
console.log(soma);

// 4. (Desafio) Dado um array de produtos com nome e preço, use `reduce` para calcular o valor total da compra:
const carrinho = [
{ nome: 'Camiseta', preco: 29.99 },
{ nome: 'Calça', preco: 89.9 },
{ nome: 'Meias', preco: 9.99 }
];
let valorTotal  = carrinho.reduce((acc, atual) => acc + atual.preco, 0);
console.log(valorTotal);

