// BASIC function with types 
function add(a:number, b:number):number{
    return + b
}

// Optional parameters

function greet(name:string , greeting?:string):string{
    if(greeting){
     return `${greeting}, ${name}!`;
    }
    return `Hello ${name}`;
}

// Default parameters 
function multiply(a:number, b:number = 1):number{
    return a*b;
}

// Rest parameters
function sum(...numbers:number []):number{
    return numbers.reduce((total,n) => total + n,0);
}

// Arrow functions 
let divide = (a: number, b: number): number => a / b;