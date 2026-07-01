//1. Use `setTimeout` para exibir "Olá, mundo!" após 1,5 segundos.
setTimeout(() => {console.log("Olá, mundo!");}, 1500);

//2. Crie um contador que exibe um número a cada segundo até 10 e depois para.
let contador = 0;
let intervalo = setInterval(() => {console.log(++contador);
    if (contador === 10) clearInterval(intervalo);
}, 1000);

// 3. Faça uma função que, ao ser chamada, inicie um `setInterval` e outra que pare esse intervalo.
let contador2 = 0;
let intervalo2 = null;

function iniciarContador2(){
    intervalo2 = setInterval(() => {console.log(++contador2);}, 1000);
}
function pararContador2(){
    clearInterval(intervalo2);
    intervalo2 = null; 
}
iniciarContador2();
pararContador2();


// 4. (Desafio) Implemente um cronômetro com `setInterval`, mostrando minutos e segundos.

let minutos = 0;
let segundos = 0;
let intervalo3 = null;

function iniciarCronometro(){
    intervalo3 = setInterval(() => {
        segundos++;

        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }

        let minFormatado = minutos.toString().padStart(2, '0');
        let segFormatado = segundos.toString().padStart(2, '0');

        console.log(`${minFormatado}:${segFormatado}`);
    }, 1000);
}

function pararCronometro(){
    clearInterval(intervalo3);
}

iniciarCronometro(); 
pararCronometro();