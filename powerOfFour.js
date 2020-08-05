var isPowerOfFour = function(num) {
  //iterate
  while(num > 0){
    //if number is 1 will be our break or default positive
    if(num === 1){
      return true;
      //if it isn't divisible evenly by 4 not a power of
    } else if( num % 4 !== 0){
        return false
      //if 1 hasn't been reached and it's divisible by 4, we make it smaller
    } else {
        num = num/4 ;
    }
   }
   //return false if number gets smaller than 0 and exits loop
   return false;
};