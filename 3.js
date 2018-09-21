function fibo(n){
    var aux1 = 1;
    var aux2 = 0;
    var aux = 0;
    if (n <= 1) {
        console.log(0);
    }
    else{
        console.log(0);
        if(n > 2){
            console.log(1);
        }
        for(let i = 0; i < n-1; i++){
            aux = aux2 + aux1;
            aux1 = aux2;
            aux2 = aux;
            console.log(aux);
        }
    }
}