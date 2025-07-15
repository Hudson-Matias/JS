let nota = parseInt(prompt('Digite uma nota: '));

function classificacao(x){
    if (x <= 5){
        console.log(`A nota ${x} está ruim`);
    } else if (x >= 6 && x <= 7 ){
        console.log(`A nota ${x} está boa`);
    } else {
        console.log(`A nota ${x}, está perfeita`);
    }
}

classificacao(nota);