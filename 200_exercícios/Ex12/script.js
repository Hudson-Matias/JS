let mediaAluno = parseFloat(prompt("Qual a sua média?"));

function verificaSituacaoAluno(x){
    if(x >= 7.0){
        console.log('APROVADO!');
    } else if(x > 5.0 && x < 6.9){
        console.log('RECUPERAÇÃO!');
    }else{
        console.log('REPROVADO!');
    }
}

verificaSituacaoAluno(mediaAluno);