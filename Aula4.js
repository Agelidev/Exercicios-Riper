// 1. Use um laço for para exibir os números de 1 a 10.
for(let num = 1; num <= 10; num++)
    {
        console.log(num);
    }

// 2. Use while para somar números de 1 a 5.
let somar = 1
while (somar < 6)
{
    console.log(somar);
    somar++;
}

// 3. Crie um do...while que peça uma senha até que seja '1234'.
let senha
do 
{ 
   senha = prompt("Digite sua senha: ");
}
while (senha !== "1234");
