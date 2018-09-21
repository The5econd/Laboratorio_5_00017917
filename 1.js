var palabra = prompt("ingrese palabra ");
var inversa = palabra.split("").reverse().join("");
if (palabra == inversa){
    console.log(` ${palabra} es palindroma`);
}else{
    console.log(` ${palabra} no es palindroma`);
}


	
