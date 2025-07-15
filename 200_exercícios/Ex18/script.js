let idade = parseInt(prompt('Digite a sua idade: '));

function podeCNH(x){
    if (x < 18){
        console.log(`Você não pode tirar CNH, você tem ${x} anos`);
    } else {
        console.log(`Você pode tirar CNH!`);
    }
}

podeCNH(idade);