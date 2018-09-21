function SERIE(x){
    var anterior = 0;
    var actual = 0;
    var anterior2 = 1;

    if (x == 0 || x < 0){
        console.log('ingrese un numero mayor a 0')
        SERIE( prompt('ingrese cuantos numeros de la serie quiere (mayor a 0 porfavor)'))

    }else{
        if (x <= 1) {
            console.log(0);
        }
        else{
            console.log(0);

            if(x > 2){
                console.log(1);
            }
            
            for(let i = 0; i < x-1; i++){
                actual = anterior + anterior2;
                anterior2 = anterior;
                anterior = actual;
                console.log(actual);
            }
        }
    }
}
SERIE( prompt('ingrese cuantos numeros de la serie quiere ( mas que 0)'))