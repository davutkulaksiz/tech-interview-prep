class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create linked list
let head = new Node("apple");
let second = new Node("banana");
let third = new Node("orange");

head.next = second;
second.next = third;

// traverse the linked list
let currentNode = head;
while (currentNode != null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
