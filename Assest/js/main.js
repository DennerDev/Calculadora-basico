// numeros na tela
function insert(num){
    let nummber = document.getElementById('resultado').innerHTML ;
    document.getElementById('resultado').innerHTML = nummber + num;
}

// Limpar os todos os numeros digitados
function clean(){
    document.getElementById('resultado'). innerHTML = '';
}

// Limpar apenas o ultimo numeros digitado
function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring (0, resultado.length - 1);
}


// Realizando os calculos básico com (eval())
function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado){
       document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = 'NADA';
    }
}