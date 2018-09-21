var numREAL = absoluto( prompt('ingrese valor real cualquiera'));

function absoluto(numREAL){
    if (numREAL == 0) {
        console.log('su valor absoluto es 0');
        return 0;
    }
    if (numREAL < 0){
        abso = (numREAL*-1);
        console.log(` su valor absoluto es ${abso}`)
        return -1;
    }
    else{
        abso = numREAL;
        console.log(`su valor absoluto es ${abso}`)
        return numREAL;
    }
}