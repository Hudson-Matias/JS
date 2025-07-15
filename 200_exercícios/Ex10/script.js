let nota1 = parseInt(prompt('Digite a primeira nota:'));
let nota2 = parseInt(prompt('Digite a segunda nota:'));

let media = (nota1 + nota2) / 2.0;

function mediaAluno(m){
    if(m < 7.0){
        console.log(`Aluno Reprovado`);
    } else {
        console.log(`Aluno Aprovado`)
    }
}

mediaAluno(media);