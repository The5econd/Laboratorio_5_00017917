

var x =['2','', '5', '1'];

function ordernar(){
    var x =['2','7','8', '5', '1'];
    var key;
    var j;
    for(var x=1; x<x.length;x++){
        key= x[x];
        j= x-1;
        while(j>-1 && key<x[j]){
            x[j+1]=x[j];
            j=j-1;
        }
        x[j+1]= key;

    }
    return x;
}
console.log(ordernar());