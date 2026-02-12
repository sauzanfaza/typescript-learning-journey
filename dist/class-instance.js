"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//oop: cara kita ngemodelin sesuatu kaya objek di dunia nyata
class Car {
    name;
    speed;
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    formula() {
        return `${this.name} have a ${this.speed} speed`;
    }
}
const ferrari = new Car("Ferrari", 100);
console.log(ferrari.formula());
