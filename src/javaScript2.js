function getNumber(x, y) {
    if (x <= 100000 && y <= 100000){
      var a = (y-1)+x;
      var b;
      
      if (a % 2 == 0){
        b = (x/2)*a;
        console.log(b+"a"+a)
      }else{
      	b = (((a-1)/2)+1)+(a/2)*(a+1);
        console.log(b+"b"+a)
      }

      return b;
    }    
}
console.log(getNumber(6,2))