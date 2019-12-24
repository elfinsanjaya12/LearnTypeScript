class List<T>{
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }
  add(elements: T): void {
    this.data.push(elements);
  }
  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data
  }
}

const numbers = new List<number>(1, 2, 3)
console.log(numbers.getAll())
numbers.add(4);
console.log(numbers.getAll())
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll())

const rondom = new List<number | string>(1, 2, 3, "A", "B");
console.log(rondom.getAll());
rondom.add("D")
rondom.add(90)
console.log(rondom.getAll());
