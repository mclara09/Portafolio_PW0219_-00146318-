/*ejercicio1
function tipoDato(arre){
    var tipoarr;
 for(var i=0; i<=arre.lenght;i++){}
    console.log(tipo.lenght);
    tipoarr.push(typeof arre[i]);
}

}

tipoDato([manzana,2,34,hola]);
*/
/*ejercicio2
function arreglo(sparre){
    var suma;
    var prom;
    for(var i=0; i<sparre.lenght; i++){
        suma=suma+sparre[i];
    }
    prom=suma/sparre[i];

    console.log(suma);
    console.log(prom);
}
arreglo([1,2,3,4]);*/

/*ejercicio3*/
/*
function ocurrencia(cantidad){
var contador;
for(var i=0; i<cantidad[0].lenght;i++){
if(cantidad[0][i]==cantidad[1]){
    contador++;
}

}
console.log(contador);
}

ocurrencia([[2,4,"palabra",4],4]);
*/
/*ejercicio4*/


/*ejercicio 5*/
/*function palindrome(palabra){
var isPalindrome=true;
var original=palabra.split("");
//console.log(original);
var invertido=palabra.split("").reverse();
//console.log(invertido);
for(var i=0; i<original.length;i++){
    if(invertido[i]!=original[i]){
        console.log("no es palindrome");
        isPalindrome=false;
        break;
    }

    
    console.log("es palindroma");

}
}

palindrome("ana");*/
/*ejercicio6

function ordenar(lista){
    for(var i=0; i<lista.lenght;i++){
        for(var j=0;j<lista.lenght -1; j++){
            if(lista[j+1]<lista[j]){
                var aux = lista[j+1];
                lista[j+1]=lista[j];
                lista[j]=aux;
            }
        }
    }
    return lista;
    
}
*/
/*ejercicio9
function Acircu(radio){
var area=0;

area=Math.PI*(radio*radio);


if(radio<=0){
    console.log("radio negativo");
}
else{
    console.log(area);
}
}
Acircu(2);
*/