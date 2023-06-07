'use strict';
// find maximum value of a binary tree
// Arguments: none
// Returns: max number
const { Tree, Node } = require('../../index.js');
describe('Tree', () => {
  test('findMax', () => {
    let tree = new Tree();
    tree.root = new Node(12);
    tree.root.left = new Node(59);
    tree.root.right = new Node(-15);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(2);
    tree.root.right.right = new Node(17);
    const results = tree.findMax();
    expect(results).toEqual(59);
  });
});
