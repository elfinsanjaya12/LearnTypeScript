"use strict";
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (elements) {
        this.data.push(elements);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List(1, 2, 3);
console.log(numbers.getAll());
numbers.add(4);
console.log(numbers.getAll());
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());
var rondom = new List(1, 2, 3, "A", "B");
console.log(rondom.getAll());
rondom.add("D");
rondom.add(90);
console.log(rondom.getAll());
