// function string
function getName(): string {
  // harus me-return string
  return "ini function string";
}

// function number
function getAge(): number {
  // harus me-return number
  return 24;
}

// function tidak me-return apa-apa
function printName(): void {
  console.log("elfin sanjaya");
}

console.log(getName());
printName();

// tipe data pada argumen
function perKalian(val1: number, val2: number): number {
  return val1 * val2;
}

const result = perKalian(3, 5);
console.log(result)

// fuction as type 
type Tambah = (val1: number, val2: number) => number;

const add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
}

console.log(add(3, 4));

// detault parameter
const fullName = (first: string, last: string = "Sanjaya"): string => {
  return first + " " + last;
}

console.log(fullName("Elfin"))

// optional parameter hanya untuk output nya hanya string tidak untuk number
const getUmur = (val1: number, val2?: number): string => {
  return val1 + " " + val2;
}

console.log(getUmur(1));