// 1 --> 2 --> 3 --> 4 --> 5 --> null

// const exampleSinglyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: {
//             value: 5,
//             next: null,
//           },
//         },
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const previousPointer = this.getPointerByIndex(index - 1);

    newNode.prev = previousPointer;
    newNode.next = previousPointer.next;
    previousPointer.next = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    const removeNode = this.getPointerByIndex(index);

    if (index === 0) {
      this.head = removeNode.next;
    } else if (index > 0 && index < this.length - 1) {
      const previousPointer = this.getPointerByIndex(index - 1);
      const removeNode = this.getPointerByIndex(index);

      previousPointer.next = removeNode.next;
      removeNode.next = null;
    } else if (index === this.length - 1) {
      this.tail = this.getPointerByIndex(index - 1);
      this.tail.next = null;
    }

    this.length--;

    return removeNode;
  }

  getPointerByIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);

myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.prepend(0);
myDoublyLinkedList.insert(2, 4);
myDoublyLinkedList.append(myDoublyLinkedList.remove(2).value);
