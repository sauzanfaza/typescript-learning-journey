//1. basic types
let username: string = "Sauzan"
let age: number = 21
let isStudent: boolean = true

//2. array
let hobbies: string[] = ["coding", " chess", " baking", " journaling" , " gymm"]

//3. function with typed parameters and return type
function introduce(name: string, age:number, hobbies: string[]): string {
    return `Hi, my name is ${name} and i am ${age} yearls old. My hobbies is ${hobbies}`
}

console.log(introduce(username, age, hobbies))