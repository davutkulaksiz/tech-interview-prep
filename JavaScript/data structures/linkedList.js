class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node("tekir");
let second = new Node("dombili");
let third = new Node("gatto");

head.next = second;
second.next = third;

let currentNode = head;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
