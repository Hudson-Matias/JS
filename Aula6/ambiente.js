let num = [4,5,6,7,8]
/*
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/

/*
for(var x = 0; x < num.length; x++){
    console.log(`A posição ${x} tem os valores ${num[x]}`)
}*/


/*for(var x in num){
    console.log(num[x])
}*/
var pos = num.indexOf(2)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
