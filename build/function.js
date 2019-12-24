"use strict";
// function string
function getName() {
    // harus me-return string
    return "ini function string";
}
// function number
function getAge() {
    // harus me-return number
    return 24;
}
// function tidak me-return apa-apa
function printName() {
    console.log("elfin sanjaya");
}
console.log(getName());
printName();
// tipe data pada argumen
function perKalian(val1, val2) {
    return val1 * val2;
}
var result = perKalian(3, 5);
console.log(result);
var add = function (val1, val2) {
    return val1 + val2;
};
console.log(add(3, 4));
// detault parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Sanjaya"; }
    return first + " " + last;
};
console.log(fullName("Elfin"));
// optional parameter hanya untuk output nya hanya string tidak untuk number
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getUmur(1));
