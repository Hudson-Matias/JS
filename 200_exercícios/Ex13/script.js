let peso = parseFloat(prompt('Digite seu peso em KG:'));
let altura = parseFloat(prompt('Digite a sua altura em M:'));

function calculaIMC(x, y){
    var imc = x / (y * y)

    if(imc < 18.5){
        console.log('ABAIXO DO PESO');
    } else if (18.5 <= imc && imc < 25){
        console.log('NORMAL');
    } else if (25 <= imc && imc < 30){
        console.log('SOBREPESO');
    } else {
        console.log('OBESIDADE');
    }
}

calculaIMC(peso, altura);