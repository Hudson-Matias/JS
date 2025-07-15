let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let num3 = parseInt(prompt('Digite o terceiro número: '));

function maiorNumero(x, y, z){
    if(x > y && x > z){
        console.log(`O número ${x}, é o maior`);
    } else if (y > x && y > z){
        console.log(`O número ${y}, é o maior`);
    } else {
        console.log(`O número ${z}, é o maior`);
    }
}

maiorNumero(num1, num2, num3);