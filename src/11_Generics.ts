// Generics in typescript

function identity<MyType>(arg:MyType):MyType{
    return arg;
}

let output1 = identity<string>("subscribe");
let output2 = identity<number>(100);

// Generics with array 
function getFirstElement<T>(arr:T[]){
     return arr[0];
}
let num = getFirstElement<number>([1,2,3]);
let myName = getFirstElement<string>(["prashant","shinde"]);

// Generic interfaces
interface KeyValuePair<K,V>{
    key:{
        name:string,
        myKey:K
    },
    value:V
}

let stringNumberPair : KeyValuePair<string,number> = {
    key : {
        name:"Prashant",
        myKey:""
    },
    value:27
}
