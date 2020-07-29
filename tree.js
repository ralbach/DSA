

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.root = null;
  }

  //inserts new value into tree, if tree contains root, calls helper function to sort through branches
  insert(value){
    const newNode = new Node(value);

      if(this.root === null){
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
  }
  //inserts newNode lower than node to left, higher than node to the right
  insertNode(node, newNode){
    //check if newNode value is lower (left side)
    if(newNode.data < node.data) {
      //if empty we can set
      if(node.left === null){
      node.left = newNode;
      //otherwise recurse into the next value
      } else {
        this.insertNode(node.left, newNode);
      }
      //if newNode is greater, don't need logic, check for null
    } else {
      //if no right node, set it
      if(node.right === null){
        node.right = newNode;
        //otherwise, recurse to compare the right node
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // //checks tree for a value and returns bool
  // contains(value){
  //   //found the right node
  //   if(this.data === value){
  //     return true;
  //     //otherwise, logic starts with left side/lower than
  //   } else if(value < this.data) {
  //     //if it's lower and there isn't a node, it doesn't exist
  //     if(this.left === null){
  //       return false;
  //     } else {
  //       //otherwise, if it's lower and there is a node, let's recurse and see if that's right.
  //       return nodeContains(value, this.left);
  //     }
  //   }
  //   //check if the value is higher, or right side of tree
  //    else if(value > this.data) {
  //      //if it's higher and no node, it doesn't exist
  //     if(this.right === null){
  //       return false
  //       //otherwise recurse into right side
  //     } else {
  //       return nodeContains(value, this.right)
  //     }
  //    }
  // }

  // nodeContains(value, node){
  //   if(this.data == value){

  //   }

  // }
}


let tree = new Node(4);


tree.insert(2);
tree.insert(5);
tree.insert(3);
console.log(tree.contains(3));
console.log('tree instantiate', tree)
