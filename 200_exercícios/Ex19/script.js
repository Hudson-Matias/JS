function intervalo(num){
    var intervaloMenor = 10;
    var intervaloMaior = 40;
    if (num >= intervaloMenor && num <= intervaloMaior){
        console.log('Está dentro do intervalo');
    } else {
        console.log('Está fora do intervalo!');
    }
}

let numero = parseInt(prompt('Digite um número: '));

intervalo(numero);