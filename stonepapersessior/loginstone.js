let userscore=0;
let compscore=0;
const choiceall=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const user_score=document.querySelector("#usersc");
const   comp_score=document.querySelector("#compscore");
const gen_comp_Choice=()=>{
    let opt=['rock','paper' ,'scissors'];
    const ran_ind=Math.floor(Math.random()*3);
    return opt[ran_ind];


}
const drawgame=()=>{
    console.log("game over");
    msg.innerText="Game over";
    msg.style.color="blue";
}

const playgame=(userch)=>{
    console.log("user choice is = "+userch);
    //generate computer choice ]
    const comp_choice=gen_comp_Choice();
    console.log("computer choice:"+comp_choice);


    if(userch===comp_choice)
    {
        drawgame();
    }
    else 
    {
        let userwin=true;
        if(userch==="rock")
        {
            if(comp_choice=="paper")
            {
                userwin=false;
            }
            else
            {
                userwin=true;
            }
        }
        else if(userch=="paper")
        {
            if(comp_choice=="scissors")
            {
                userwin=false;
            }
            else
            {
                userwin=true;
            }
        }
        else if(userch=="scissors")
        {
            if(comp_choice=="rock")
            {
                userwin=false;
            }
            else
            {
                userwin=true;
            }
        }
         showwin(userwin,userch,comp_choice);
}

}
let user_sc=0;
let comp_sc=0;
const showwin=(userwin,userch,comp_choice)=>{
    if(userwin){
        console.log("you win");
        user_sc++;
        user_score.innerText=user_sc;
        msg.innerText=`You Win! ${userch} beats ${comp_choice}`;
       msg.style.color="green";

    } 
    else{
        comp_sc++;
        comp_score.innerText=comp_sc;
        console.log("you lose");
        msg.innerText=`You lose ${comp_choice} beats ${userch}`;
        msg.style.color="red";
    }
}
choiceall.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userch=choice.getAttribute("id");
        console.log("hello"+userch);
        playgame(userch);
    });
});