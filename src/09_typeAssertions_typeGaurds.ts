// Type assertions 

let someValue: unknown = "Prashant Shinde";
let strLength : number  = (someValue as string).length;

// OR

let str2 : number = (<string>someValue).length;



// Type guards

function processValue(value : string | number){
    if(typeof value === "string"){
        console.log(value.toLocaleLowerCase());
    }else{
        console.log(value.toFixed(2));
    }
}

// Instance of type guards

    class Dog {
        bark(){
            console.log("Woof!");
        }
    }

    class Cat {
        meow(){
            console.log("Meow!")
        }

    }

    function makeSound(animal:Dog | Cat){
        if(animal instanceof Dog){
            animal.bark();
        }
    }