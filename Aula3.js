// 1. Crie um programa que verifique se uma pessoa pode votar (idade >= 16). 
let Idade = 18;
if (Idade >= 16)
    {
        console.log("Pode votar!");
    }
else
    {
        console.log("Não pode votar!");
    }

// 2. Use switch para exibir uma mensagem diferente para cada dia da semana. 
let diaSemana = 'terça'; 
switch (diaSemana) 
    {
        case 'segunda': console.log('Tudo o que fizerem, façam de todo o coração. Cl 3:23'); 
        break; 
        case 'terça': console.log('Não se apavore nem desanime, pois o Senhor estará com você. Js 1:9'); 
        break; 
        case 'quarta': console.log('Deixo lhes a paz; a minha paz lhes dou. Jo 14:27'); 
        break;
        case 'quinta': console.log('Tudo posso naquele que me fortalece. Fp 4:13'); 
        break;  
        case 'sexta': console.log('Deem graças em todas as circunstâncias.  1Ts 5:18'); 
        break; 
        case 'sábado': console.log('Venham a mim todos vocês que estão cansados, e eu lhes darei descanso. Mt 11:28'); 
        break; 
        case 'domingo': console.log('Este é o dia que o Senhor fez; exultemos e alegremo-nos nele. Sl 118:24'); 
        break; 
        default: console.log('Ué, não tem esse dia na semana :('); 
    } 