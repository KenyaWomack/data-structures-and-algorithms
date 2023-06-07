const breadthFirst = require('./index.js');
const { Tree, Node } = require('./tree'); // Make sure to adjust the file path accordingly

// Test case 1: Check if the breadthFirst function returns the correct array of values
test('Breadth-first traversal', () => {
  const tree = new Tree();
  tree.root = new Node(2);
  tree.root.left = new Node(7);
  tree.root.right = new Node(5);
  tree.root.left.left = new Node(2);
  tree.root.left.right = new Node(6);
  tree.root.left.right.left = new Node(5);
  tree.root.left.right.right = new Node(11);
  tree.root.right.right = new Node(9);
  tree.root.right.right.left = new Node(4);

  const result = breadthFirst(tree);
  expect(result).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
});

// Test case 2: Check if the breadthFirst function returns an empty array for an empty tree
test('Breadth-first traversal for empty tree', () => {
  const tree = new Tree(); // An empty tree object

  const result = breadthFirst(tree);
  expect(result).toEqual([]);
});
