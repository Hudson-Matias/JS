function verificarPalindromo (palavra){
    var palavraInvertida = palavra.split('').reverse().join('');
    if (palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palindromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palindromo`);
    }
}

let palavra = prompt('Digite uma palavra: ');
verificarPalindromo(palavra);