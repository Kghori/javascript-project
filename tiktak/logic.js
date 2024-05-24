let box1=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");

let newbtn=document.querySelector("#new-btn");
let msgcon=document.querySelector(".msgcon");

let msg=document.querySelector("#msg");
let resetbtn=document.querySelector("#reset-btn");
let term=true;


box1.forEach((box)=>{
    box.addEventListener("click",()=>{
            
            if(term==true){
                
                box.innerHTML="O";
                term=false
            }
            else{
                box.innerHTML="X";
                term=true;
            }
            box.disabled=true;
            checkout();
    });

});
const win=[
    
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    term = false;
    enablebox();
    msgcon.classList.add("hide");
}

const enablebox=()=>{
    for(let box of box1){
        // term=true;
        box.disabled=false;
    box.innerText="";

    }
    
}
const showwiiner = (winner) => {
    console.log("winner is " + winner);
    msg.innerText = `Congratulation the Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disable_box();
};


const checkout = ()=>{
    // console.log(win[0]);
    for(let pattern of win){
        // console.log(box1[pattern[0]],box1[pattern[1]],box1[pattern[2]]);
        let po1=box1[pattern[0]].innerHTML;
        let po2=box1[pattern[1]].innerHTML;
        let po3=box1[pattern[2]].innerHTML;
        if(po1!="" && po2!="" && po3!=""){
            if(po1===po2 && po2===po3){
                console.log("winner"+po1);
            
            showwiiner(po1);}
        }
        
    }
};
//p1 p2

const disable_box=()=>{
    for(let box of box1){
        box.disabled=true;
    }
}


newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);