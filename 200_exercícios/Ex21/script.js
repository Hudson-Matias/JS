let mes = parseInt(prompt('Digite o número do mês: '));

function estacaoAno(n){
    switch (n){
        case 1:
            console.log('O mês é JANEIRO e a estação do mês é VERÃO');
            break;
        case 2:
            console.log('O mês é FEVEREIRO e a estação do mês é VERÃO');
            break;
        case 3:
            console.log('O mês é MARÇO e a estação do mês é VERÃO PARA OUTONO');
            break;
        case 4:
            console.log('O mês é MAIO e a estação do mês é OUTONO');
            break;
        case 5:
            console.log('O mês é MAIO e a estação do mês é OUTONO');
            break;
        case 6:
            console.log('O mês é JUNHO e a estação do mês é OUTONO PARA INVERNO');
            break;
        case 7:
            console.log('O mês é JULHO e a estação do mês é INVERNO');
            break;
        case 8:
            console.log('O mês é AGOSTO e a estação do mês é INVERNO');
            break;
        case 9:
            console.log('O mês é SETEMBRO e a estação do mês é INVERNO PARA PRIMAVERA');
            break;
        case 10:
            console.log('O mês é OUTUBRO e a estação do mês é PRIMAVERA');
            break;
        case 11:
            console.log('O mês é NOVEMBRO e a estação do mês é PRIMAVERA');
            break;
        case 12:
            console.log('O mês é DEZEMBRO e a estação do mês é PRIMAVERA PARA VERÃO');
        default:
            console.log('Mês inexistente!');
    }
}

estacaoAno(mes);