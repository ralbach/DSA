
var duplicateZeros = function(arr) {
  let length = arr.length;
    //iterate across array
    for(let i = arr.length; i >= 0; i--){
      //if zero, start to shift array out
        if(arr[i] === 0){
            for(let j = arr.length; j > i; j--){

              arr[j] = arr[j -1];
            }
        }

    }
    //delete indexes greater than the original array length
    let toPop =  arr.length - length;
    for(let i = 0; i < toPop; i++){
      arr.pop();
    }
    //no return as function expects void
};
// Now that we have created space for the new element,
// we can insert it at the required index.

let intArray = [1,0,2,3,0,4,5,0]

//[1,0,2,3,0,4,5,0]
//[1,0,0,2,3,0,0,4]
//.

console.log(duplicateZeros(intArray));