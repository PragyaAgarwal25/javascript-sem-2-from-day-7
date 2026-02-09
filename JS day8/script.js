//function handleClick(){
//    document.getElementById("btn").
//    textContent="Clicked"
//}

// function handleClick(){
//    const head = document.querySelector("h1");
//    const btn = document.querySelector("button");
//    head.style.color = "tomato";
//    head.textContent = "new heading";

//    btn.textContent = "clicked";
//  }

// function handleClick(){
//     const spanEle= document.createElement("span").
//      textContent="this is a span element";

//      const image=document.createElement("img");

//  image.setAttribute("src","https://www.krmangalam.edu.in/wp-content/uploads/2024/02/178bs_Best-Colleges-for-Master-in-Commerce-in-Gurgaon-768x431-1.webp");

//  image.setAttribute("alt","K.R Mangalam");

//  document.getElementById("content").append(spanEle);
//  document.getElementById("content").append(image);
//  }
 document.getElementById("btn").addEventListener("click",()=>{ 
    const spanEle= document.createElement("span").
    textContent="this is a span element";

 const image=document.createElement("img");

image.setAttribute("src","https://www.krmangalam.edu.in/wp-content/uploads/2024/02/178bs_Best-Colleges-for-Master-in-Commerce-in-Gurgaon-768x431-1.webp");

image.setAttribute("alt","K.R Mangalam");

document.getElementById("content").append(spanEle);
document.getElementById("content").append(image);
}

 )