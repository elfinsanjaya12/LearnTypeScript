"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Keyboard = __importStar(require("./Keyboard")); //cara import as
var BaseLaptop = /** @class */ (function () {
    function BaseLaptop(name, type, numeric, touchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }
    BaseLaptop.prototype.a = function () {
        console.log(Keyboard.a());
    };
    BaseLaptop.prototype.b = function () {
        console.log(Keyboard.b());
    };
    return BaseLaptop;
}());
exports.default = BaseLaptop;
