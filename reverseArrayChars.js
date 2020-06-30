/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  //set left and right markers
    let left = 0;
    let right = s.length - 1;
    while(left <= right){
        //assign temp
        let temp = s[left];
        //swap
        s[left] = s[right];
        s[right]= temp;
      //increment to across array/string
      right--;
      left++;
    }
};