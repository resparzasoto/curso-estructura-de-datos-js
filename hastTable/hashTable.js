class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    if (!this.get(key)) {
      const address = this.hashMethod(key);

      if (!this.data[address]) {
        this.data[address] = new Array();
      }

      this.data[address].push([key, value]);
    }

    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const bucket = this.data[address];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const item = bucket[i];

        if (item[0] === key) {
          return item[1];
        }
      }
    }

    return undefined;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("Jesús", 1995);
myHashTable.set("Jesús", 1995);
myHashTable.set("José", 1994);
myHashTable.set("Juan", 1991);

console.log("🚀 ~ file: hashTable.js ~ line 27 ~ myHashTable", myHashTable);

console.log("myHashTable.get('Jesús') ->", myHashTable.get("Jesús"));
console.log("myHashTable.get('Jesus') ->", myHashTable.get("Jesus"));
console.log("myHashTable.get('José')  ->", myHashTable.get("José"));
console.log("myHashTable.get('Juan')  ->", myHashTable.get("Juan"));
