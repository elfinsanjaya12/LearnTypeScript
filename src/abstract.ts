abstract class Vehicle {
  abstract wheels: number;
  start(): void {
    console.log("Brummm");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motor extends Vehicle {
  wheels: number = 2;
}

const car = new Car();

console.log(car.wheels)
car.start();

const motor = new Motor();
console.log(motor.wheels);
motor.start();
