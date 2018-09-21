function areaCir(r){

    if (r <= 0) {
        area = -1;
        /*console.log(-1);*/
        return -1;
    }else{
        area = ( r**2 )*( Math.PI );
        /*console.log(area);*/
        return area;
    }
}

areaCir ( prompt('Radio'));