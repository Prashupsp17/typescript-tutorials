// promise using typescript

function fetchUser(id:number): Promise<{id:number,name:string}>{
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({id,name:"Prashant"});
        },1000);
    })
}

// Async await
async function getData(id:number): Promise<void>{
    try{
        const user  = await fetchUser(id);
        console.log(user);
    }catch(error){
        console.log('Error fetching user :' + error);
    }
}