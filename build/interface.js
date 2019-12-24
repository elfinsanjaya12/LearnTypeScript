"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGamming) {
        this.name = name;
        this.isGamming = isGamming;
    }
    Asus.prototype.on = function () {
        console.log("Nyala");
    };
    Asus.prototype.off = function () {
        console.log("Mati");
    };
    return Asus;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, keyboord) {
        this.name = name;
        this.keyboord = keyboord;
    }
    MacBook.prototype.on = function () {
        console.log("Nyala");
    };
    MacBook.prototype.off = function () {
        console.log("Mati");
    };
    return MacBook;
}());
var asus = new Asus("Asus", true);
asus.on();
asus.off();
var mb = new MacBook("MacBook", true);
mb.on();
mb.off();
