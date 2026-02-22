// Object type annotation
const user : {name:string; age:number}={
    name:"Prashant",
    age:26
}

// interface 
interface User {
    name:string,
    age:number,
    email? : string //Optional Property
    readonly id: number // readOnly Property
}

const newUser: User = {
    name:"prashant",
    age:26,
    email:"w2wwewe",
    id: 1
}
// newUser.id = 2; Cannot assign to 'id' because it is a read-only property.

// interfaces with methods

interface Product{
    name:string,
    price:number,
    getDiscount(percent:number):number;
}

let laptop : Product = {
    name:"Macbook pro",
    price:2000,
    getDiscount(percentage:number):number{
        return this.price * (percentage/100);
    }
}

// Type alias

type Point = {
    x:number;
    y:number;

}

let point : Point = {x : 10, y: 20};

//Type alias for primitives
type Id = string | number;

let userId : Id = "prashant123";
let productId: Id = 456;

