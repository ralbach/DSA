const ngrams = (string, number) => {
  let storage = {};
  string = string.split(' ')

  for(let i =0; i < string.length - number; i++){
    let ngramString = "";
    for(let j = i; j < number + i; j++){
      if(string[j] !== undefined) {ngramString = ngramString += string[j] + " ";}
    }
    if(!storage[ngramString]){
      storage[ngramString] = {
         'ngramString': ngramString,
         "count": 1
        };
    } else storage[ngramString]["count"] = storage[ngramString]["count"] + 1
  }
  return storage;
}




console.log(ngrams('this car is not a dog this car', 3));