// const HashMap = require('/stack-queue-brackets/hash-repeated-word/hash-repeated-word.test.js');

// function tree_intersection(tree1, tree2) {
//   const tree1Values = getTreeValues(tree1);
//   const tree2Values = getTreeValues(tree2);

//   const intersection = new Set();

//   for (const value of tree1Values) {
//     if (tree2Values.has(value)) {
//       intersection.add(value);
//     }
//   }

//   return intersection;
// }

// function getTreeValues(tree) {
//   const values = new Set();

//   function traverse(node) {
//     if (node) {
//       values.add(node.value);
//       traverse(node.left);
//       traverse(node.right);
//     }
//   }

//   traverse(tree.root);
//   return values;
// }

// module.exports = tree_intersection,
// HashMap;

'use strict';
const { HashTable } = require('../hash-table');
function tree_intersection(tree1, tree2) {
  let values = [];
  let table = new HashTable(1024);
  let current1 = tree1.head;
  let current2 = tree2.head;
  while (current1) {
    table.set(current1, current1);
    if (current1.left) {
      current1 = current1.left;
    }
    if (current1.right) {
      current1 = current1.right;
    }
  }
  while (current2) {
    if (table.get(current2)) {
      values.push(current2);
      if (current2.left) {
        current2 = current2.left;
      }
      if (current2.right) {
        current2 = current2.right;
      }
    }
    if (current2.left) {
      current2 = current2.left;
    }
    if (current2.right) {
      current2 = current2.right;
    }
  }
  return values;
}
module.exports = { tree_intersection };
