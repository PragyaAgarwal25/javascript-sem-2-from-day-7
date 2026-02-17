console.log("start...")


function login(uname,password,cb){
    setTimeout(()=>{
        //return "hello world";
    cb({uname:uname,isLoggedIn: true, Message:"login successfull"});
    },1000);
}

function getVideoList(email,cb){
    setTimeout(()=>{
        cb([{title:"video 1"},{title:"Video 2"}])
    },2000);
}

function getVideoDetail(video,cb);{
    setTimeout(()=>{
    },2000);
}

login("john@gmail.com","password123",(userdata)=>{
    console.log(userdata);
    getVideoList(userdata.uname,(videoList)=>{
     console.log(videoList);
     getVideoDetail(videoList[0],(videoList)=>{
        console.log(getVideoDetail);
     })  
    })
});
console.log("End....");