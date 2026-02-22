// String literal types

let direction : "north" | "south" | "east" | "west";
direction = "north";

let dice : 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ;

// Combing them together example

type SuccessResponse  ={
    success:'success',
    data:any
}

type    ErrorResponse = {
    status : "error",
    message:string
}
type ApiResponse =  SuccessResponse | ErrorResponse;