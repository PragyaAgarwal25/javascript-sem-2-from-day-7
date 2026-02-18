async function getData(){
// fetch(url)
// .then(resp=>resp.json())
// .then(data=>confirm.console.log(data));
let resp=await fetch(url);
let data= await rasp.json();
return data;
}
getData("https://jsonplaceholder.typicode.com/todos/5")
.then(data=>console.log(data));