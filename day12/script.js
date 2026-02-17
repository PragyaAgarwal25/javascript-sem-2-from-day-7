//promise are the smart organization of callback function
// let myPromise = new Promise((res,rej)=>{
//     let data = "this is data hfhdjhhvhksjhh";
//     if(data){
//         res(data);
//     }    else{
//         rej("error");
//     }
// });

// myPromise
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });


// console.log(myPromise);


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(robj=>robj.json())
.then(data=>console.log(data))
.catch(err=>console.log(err));
