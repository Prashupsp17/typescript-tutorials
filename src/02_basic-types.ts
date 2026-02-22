let username : string = "Prashant";
let age : number = 26;
let admin : boolean = true;

// Arrays
let numbers:number [] = [1,2,3,4];
let names:string [] = ["prashant","shinde"];

// Tuples
let person  : [string,number] = ["Piyush",28];

enum color{
    red,
    blue,
    green
}
let favoriteColor:color = color.red;

// Any (Avoid when possible)
let randomValue : any = 10;
randomValue = "Piyush";
randomValue = true;

// Unknown (safer than any)
let userInput : unknown;
userInput = 5;
userInput = "text";

// Void (for function that dont return)
// Remove void when u want to return 

function subscribe(message : string): void {
    console.log(message);
    // return "Hello";
    // return 5;
}