"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Class User
// public = bisa diakses di semua class
// protected = hanya bisa diakses di class nya sendiri dan class turunan nya
// private = hanya bisa diakses di class nya sendiri
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
// inheritance
// class admin mewari semua yang ada pada kelas user
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = 
        // add super 
        // super membutuhkan pamaramet dari class turnanan nya
        _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.getNameRole = function () {
        return "hei";
    };
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        // getter and setter
        // memberikan nilai
        set: function (value) {
            if (value.length < 5) {
                this._email = "Email Salah";
            }
            else {
                this._email = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    // static property dan static method
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
var admin = new Admin("082377954408", "Elfin Sanjaya", 24);
admin.setName("Itce");
console.log(admin.phone);
console.log(admin.getName());
admin.email = "elfinsanjaya12@gmail.com";
console.log(admin.email);
// static property and static method
var staticProperty = Admin.getRoleName;
var staticMethod = Admin.getNameRole();
console.log(staticProperty + " " + staticMethod);
var user = new User("Elfin Sanjaya", 12);
console.log(user);
