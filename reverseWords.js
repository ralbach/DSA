let reverseWords = (message) =>{

  //helper function reverses all characters
  let reverseChars = (message, leftStart, rightStart) =>{
    while(leftStart < rightStart){
      const temp = message[leftStart];
      message[leftStart] = message[rightStart];
      message[rightStart] = temp;
      leftStart++;
      rightStart--;
    }
  }

  //reverse all chars
  reverseChars(message, 0, message.length-1);
  //now reverse sentences back in place
  let currentWordStart = 0;

  //go across reversed reverseWords
  for(let i = 0; i <= message.length; i++){
      //if we hit a space or end of the array
    if(message[i] === ' ' || i === message.length){
      //reverse the current word to that point.
      reverseChars(message, currentWordStart, i -1);
      //next word start will be at the space past that
      currentWordStart = i + 1;
    }
  }

  return message.join('')
}


// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}