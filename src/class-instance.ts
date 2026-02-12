//oop: cara kita ngemodelin sesuatu kaya objek di dunia nyata
class Car {
    name: string
    speed: number

    constructor(name:string, speed: number) {
        this.name = name
        this.speed = speed
    }

    formula() {
        return `${this.name} have a ${this.speed} speed`
    }
}

const ferrari = new Car("Ferrari", 100)
console.log(ferrari.formula())