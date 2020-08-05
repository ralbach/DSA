//create the hash object
var MyHashSet = function() {
  //has a specific length to hash against
  this.mySet = Array.from({length:1000}, x=>[]);
  //hash the value of the number for more keys
  this.mapFn = function(num){
      return num%1000;
  }
};

MyHashSet.prototype.add = function(key) {
  //map value stays consistent
  let mapValue = this.mapFn(key);
  //arr is our set at the hashed key
  let arr = this.mySet[mapValue];
  //index will check if collision
  let index = arr.indexOf(key);
  //if no collision, push onto the array that location
  if(index === -1) {
      arr.push(key)
  };
};

MyHashSet.prototype.remove = function(key) {
  //map value stays consistent
  let mapValue = this.mapFn(key);
  //arr is our set at the hashed key
  let arr = this.mySet[mapValue];
  //index will check if collision
  let index = arr.indexOf(key);
  //if index does exist, we splice to the it.
  if(index !== -1){
      arr.splice(index, 1);
  }
};

MyHashSet.prototype.contains = function(key) {
  //map value stays consistent
  let mapValue = this.mapFn(key);
  //arr is our set at the hashed key
  let arr = this.mySet[mapValue];
  //index will check if collision
  let index = arr.indexOf(key);
  
  //return true or false if index exists
  return index !== -1;
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/