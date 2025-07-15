function verificarNumero(x){
    if(x < 0){
        console.log(`Este número ${x}} é negativo`);
    } else if (x > 0 ){
        console.log(`Este número ${x} é positivo`);
    } else {
        console.log(`Este número ${x} é igual a zero`);
    }
}

let numero = prompt("Digite um número:");
verificarNumero(numero);