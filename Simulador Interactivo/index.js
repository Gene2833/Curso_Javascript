//Calcular edad promedio de personas ingresadas

let edad = 0;
let suma = 0;
let promedio = 0;
let numero;

numero=prompt("ingresa el numero de personas que deseas registrar" , "");

while(edad<=numero){

    valor=prompt("Ingrese la edad "+ edad,"");
    valor=parseInt(valor);
    suma=suma+valor;
    edad=edad + 1;
}
promedioEdades=(suma)/(edad)
alert("el promedio de las edades registradas son:  " + promedioEdades);