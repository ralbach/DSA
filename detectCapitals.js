// this function, when given a string will return a true or false statement based on improper/proper use of capital letters. i.e. USA returns true, leetcode returns true, Japan returns true, but gOOgle returns false.

var detectCapitalUse = function(word) {
  let count = 0;
  for(let i =0; i < word.length; i++){
    //check for proper first letter capitalized
      if(word[i] === word[i].toUpperCase() && i === 0 ){
        count++;
      //check for letters after the first
      } else if(word[i] === word[i].toUpperCase() && i >= 1 && count > 0 ){
        count++;
        //flag for capitals later in process
      } else if(word[i] === word[i].toUpperCase() && i >= 1 && count === 0 ){
        return false;
      }
      }
      //if word is all caps
  if(count === word.length){
      return true;
      //if word has a capital ot start
  } else if(count === 1 && word.length > 1){
    return true;
    //word is all lowercase
  } else if(count === 0 && word.length >= 1){
    return true
  } else return false;
};

