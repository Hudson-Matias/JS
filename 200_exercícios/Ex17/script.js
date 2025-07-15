var numero = parseInt(prompt('Digite um número: '));

function verificaParImpar(x){
    if(x % 2 == 0){
        console.log(`O número ${x} é par`);
    } else {
        console.log(`O número ${x} é ímpar`);
    }
}

verificaParImpar(numero);