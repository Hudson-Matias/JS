let mes = parseInt(prompt('Digite o nº do mês para ver seus dias'));

function diasDoMes(n){
    if(n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12){
        console.log('Este mês tem 31 dias');
    } else if (n == 2){
        console.log('Este mês tem 28 ou 29 dias');
    } else {
        console.log('Este mês tem 30 dias');
    }
}

diasDoMes(mes);