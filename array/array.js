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
}

const myArray = new MyArray();

myArray.push("Jesús");
myArray.push("Rubén");
console.log("🚀 ~ file: array.js ~ line 22 ~ myArray", myArray);
