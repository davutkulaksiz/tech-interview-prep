// binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// create a binary search tree
let root = new Node("10");
root.left = new Node("20");
root.right = new Node("30");
root.left.left = new Node("40");
root.left.right = new Node("50");
root.right.left = new Node("60");
root.right.right = new Node("100");

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

inOrderTraversal(root);
