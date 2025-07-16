let cor = prompt('Digite uma cor: ');

function verificaCorDoSemáforo(x){
    switch(x){
        case 'verde':
            console.log('Esta cor no semáforo indica que os veículos podem passar');
            break;
        case 'vermelho':
            console.log('Esta cor no semáforo indica que os veículos devem esperar');
            break;
        case 'amarelo':
            console.log('Esta cor no semáforo indica atenção! Deve se esperar a cor vermelha');
            break;
        default:
            console.log('Esta cor não está presente nas cores do semáforo');
            break;
    }
}

verificaCorDoSemáforo(cor);