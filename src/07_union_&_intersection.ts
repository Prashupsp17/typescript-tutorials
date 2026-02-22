// Union types 

type Status = "approved" | "rejected" | "pending";

function setStatus(status:Status){
    console.log(`Status set to ${status}`);
}
setStatus("approved");

// Interface types

interface Color{
    color:string
}
interface Circle{
    radius:number
}

type ColorfulCircle = Color & Circle 

let myCircle : ColorfulCircle = {
    color:"red",
    radius:10
}   