class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.data;
  }

  pop() {
    const lastItem = this.data[--this.length];
    delete this.data[this.length];

    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];
    this.shiftIndex(0);

    return firstItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  shiftIndex(index) {
    for (; index < this.length - 1; index++) {
      this.data[index] = this.data[index + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();

myArray.push("Rubén");
myArray.push("Jesús");
myArray.push("José");
myArray.push("Juan");
console.log("🚀 ~ file: array.js ~ line 43 ~ myArray", myArray);

myArray.delete(2);
console.log("🚀 ~ file: array.js ~ line 43 ~ myArray", myArray);

myArray.pop();
console.log("🚀 ~ file: array.js ~ line 43 ~ myArray", myArray);

myArray.shift();
console.log("🚀 ~ file: array.js ~ line 43 ~ myArray", myArray);
