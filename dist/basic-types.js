"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. basic types
let username = "Sauzan";
let age = 21;
let isStudent = true;
//2. array
let hobbies = ["coding", " chess", " baking", " journaling", " gymm"];
//3. function with typed parameters and return type
function introduce(name, age, hobbies) {
    return `Hi, my name is ${name} and i am ${age} yearls old. My hobbies is ${hobbies}`;
}
console.log(introduce(username, age, hobbies));
