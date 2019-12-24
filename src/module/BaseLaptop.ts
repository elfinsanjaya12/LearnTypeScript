import ILaptop from "./lLaptop";
import * as Keyboard from "./Keyboard"; //cara import as
import { b } from "./Keyboard"; // cara import {}

abstract class BaseLaptop<T> implements ILaptop<T>{
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
    this.name = name;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
  }

  a(): void {
    console.log(Keyboard.a());
  }

  b(): void {
    console.log(Keyboard.b());
  }
}

export default BaseLaptop;