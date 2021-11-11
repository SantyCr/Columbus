function getNumber(x, y) {
    if (x <= 100000 && y <= 100000){
        var a = (x-1)+x;
        var b;
        
        if( x == 1 || x == 2){
            if (x == 1) {
                
            } else {
                
            }

        }else if(a % 2 == 0)
        {
          b = (a/2)*(a+1)*2;
        }
        else {
            b = (((a-1)/2)*(a+1)+1)*2;
        }
        
        return b-((x-1)*2);
    }
}

console.log(getNumber(1,2
    ))