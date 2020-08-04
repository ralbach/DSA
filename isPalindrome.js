// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

var isPalindrome = function(s) {

  s = s.replace(/[^a-zA-Z0-9]+/g, '');
  //define vars
  let reversedString = "";
  //check for empty string
  if(s.length ==0){return true}

  //build a reversed string
  for(let i = s.length -1; i >= 0; i--){
      reversedString+= s[i];
  }
  //console.log( reversedString, 'reversed', s, 'input')
  if(reversedString.toLowerCase() !== s.toLowerCase()){
    return false}
  return true;
};