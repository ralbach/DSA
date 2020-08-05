/**
 * Initialize your data structure here.
 */

//define our trieNodes
 var TrieNode = function() {
  this.children = {};
  this.isEnd = false;
}
//instantiation of trie
var WordDictionary = function() {
  this.root = new TrieNode();
};

/**
* Adds a word into the data structure.
* @param {string} word
* @return {void}
*/


WordDictionary.prototype.addWord = function(word) {
  //update for each root
  let curr = this.root;
  //iterate across to add letters to trie
  for(let i = 0; i < word.length; i++){
      //if no letter in the trie node child
      if(!(word[i] in curr.children)){
          //create a new trieNode
          curr.children[word[i]] = new TrieNode();
      }
      //continue adding to the new node or move to the existing letter
      curr = curr.children[word[i]];
  }
  //when finished, set the last node to the end
  curr.isEnd = true;
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  //helper function that starts at root and level 0
  const search = (current, level) =>{
      //can't search
      if(!current || (level === word.length && !current.isEnd)){
          return false;
      }
      //if we've reached end and made through all steps we can return true
      if(level === word.length && current.isEnd){
          return true;
      }
      //if the level is a '.' handle the logic
      if(word[level] === '.'){
          //26 will be letters it can be
          for(let i =0; i < 26; i++){
              //iterate across all possible letters
              let ch = String.fromCharCode(97 + i);
              //move to next if we find
              if(search(current.children[ch], level + 1)){
                  return true;
              }
          }
          return false;
      }
      //recurse through the next level of Trie if found
       return search(current.children[word[level]], level + 1);
  }

  return search(this.root, 0)

};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/