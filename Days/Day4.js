//create one prmises that will display user name and password
//using resolve and if data will be rejected its display error
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=true;
        if(!err){
            resolve("user:CSE21, password:1234");
        } else{
            reject("ERROR....data fail");
        }
    },2000)
})
.then((result)=>{ 
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

//understand the concept of fetch in console
async function test(){
    console.log("this is asynchronous function and we want to fetch data from the server")
    const response=await fetch("")
} 