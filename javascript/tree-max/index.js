'use strict';

findMax(){
  let currentMax = 0;
  let node = this.root;
  const traverse = (node) => {
    console.log(node.value);
    if (currentMax < node.value) {
      currentMax = node.value;
    }
    if(node.left !== null) {
      traverse(node.left);
    }
    if(node.right !== null) {
      traverse(node.right);
    }
  };
  traverse(node);
  return currentMax;
}
