class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTop = this.top;

      this.top = newNode;
      this.top.next = oldTop;
    }

    this.length++;

    return this;
  }

  pop() {
    const oldTop = this.top;

    this.top = this.top.next;
    this.length--;

    return oldTop;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.peek();
myStack.pop();
