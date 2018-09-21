var anio = prompt("ingrese un anio");
if ((anio % 4 == 0 && anio %100 != 0) || anio % 400 == 0){
    console.log(`el ${anio} es bisiesto`);
}else{
    console.log(`el ${anio} no es bisiesto`);
}