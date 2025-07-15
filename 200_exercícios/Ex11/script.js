function podeVotar(x){
    if(x >= 18 && x < 70){
        console.log(`Obrigatório Votar!!`);
    } else if (x == 16 || x == 17 || x >= 70){
        console.log(`Voto Facultativo`);
    } else {
        console.log(`Não votam!!`);
    }
}

let idade = parseInt(prompt("Sua idade: "));
podeVotar(idade);