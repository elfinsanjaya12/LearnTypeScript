"use strict";
function myData(value) {
    return value;
}
console.log(myData("elfin sanjaya").length);
// tidak error tapi saat dijalan akan undifine yang akan meyebabkan bug
console.log(myData(123123).length);
// generic
function getData(value) {
    return value;
}
console.log(getData("elfin sanjaya").length);
// ketika tipe data tidak sesuai makan auto error
console.log(getData(123123));
// arrow function
var arrowFunc = function (value) {
    return value;
};
