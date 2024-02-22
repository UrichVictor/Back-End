let resultado = Math.floor (Math.random() * 22);
let valor;

do{
    valor = prompt("Digite um valor de 0 a 22: ");

    if(valor > resultado){
        alert("Valor muito alto");
    }
    else if(valor < resultado){
        alert("Valor muito baixo");
    }

}while(valor != resultado);

alert("Acertou");