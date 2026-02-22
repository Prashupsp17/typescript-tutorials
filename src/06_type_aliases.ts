// Type aliases VS interface

// Interfaces can be extended but , Types aliases cannot be extended

interface Animal{
   name:string;
}
interface Dog extends Animal {
    breed:string
}
let myDog : Dog = {
    name:"buddy",
    breed: "Golden retirver",
}

// Interfaces can be declared multiple times will merge itself

interface Animal {
    name:string
}
interface Animal{
    age:number
}

let dog : Animal = {
    name:"dog",
    age:30
}

// use interfaces for objects and shapes
// types aliases for union /imtersections

interface User {
    name:string,
    age:number
}

type USERID = string | number;