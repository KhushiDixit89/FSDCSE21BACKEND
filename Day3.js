//promises:object
const promiseOne=new Promise((resolve,reject)=>{
    console.log("promise done");
    resolve("operation successfull");
    let success=true;
    if(success)
})
promiseOne.then((result)=>{
console.log(result);
}).catch((error)=> {
console.log(error);
})
