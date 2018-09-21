function decTObin(x){
    variable = x;
    Array = [];
    while(variable != 1){
        Array.push(variable % 2);
        variable = Math.floor(variable / 2);
    }
    Array.push(variable);
    Array = Array.reverse();
    Array = Array.join("");
    return Array;
}

decTObin(prompt( 'Numero' ));
