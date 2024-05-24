let b1 = document.querySelector("#bt1");
let body= document.querySelector("body");
let currmode="light";
b1.addEventListener("click", ()=>
{
   
    if( currmode==="light"){
        currmode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");

    }else{
        currmode="light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});

let back=document.querySelector("body");

let btnho=document.querySelector("#hover");
btnho.addEventListener("mouseover",()=>{
    // document.querySelector("#hover").style.backgroundColor="pink";
    // document.querySelector("body").style.backgroundImage="url('pexels-pixabay-36717.jpg')";
    back.classList.add("backimg");
    // back.classList.remove("backimg");
    
});

// bt1.onclick = () =>{
//         console.log("hello");
//         let a=12;
//         a++;

//         document.write("you are clicked"+a);

// };


// let  div1=document.querySelector("div");
// div1.onmousedown = () => {
//     console.log("you inside hello");
// };


