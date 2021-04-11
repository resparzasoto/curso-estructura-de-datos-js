class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const first = this.first;
    this.first = this.first.next;

    if (!this.first) {
      this.last = this.first;
    }

    this.length--;

    return first;
  }

  peek() {
    return this.first;
  }
}

const myQueue = new Queue();
