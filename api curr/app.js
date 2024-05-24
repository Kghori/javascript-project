const URL = "https://v6.exchangerate-api.com/v6/fef74a2768770eb07df89f77/latest/USD";
const dropdown= document.querySelectorAll(".dropdown select");
const btn1 = document.querySelector("button");
const fromcr = document.querySelector(".from select");
const tocr = document.querySelector(".to select");
const msg1=document.querySelector(".msg");
let i=0;
for (let select of dropdown){
    for (currCode in countryList) {
        // console.log(currCode,countryList[currCode]);
        let newopt=document.createElement("option");
        newopt.innerText=currCode;
        newopt.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newopt.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR")     {
            newopt.selected="selected";
        } select.append(newopt);
        
    }
   
select.addEventListener("change", (evt)=>{
    updateflag(evt.target);
});
}


const updateflag=(element)=>{
    console.log(element);
    let currcode=element.value;
    let countrycode=countryList[currcode];
        let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
        let img= element.parentElement.querySelector("img");
        img.src=newsrc;
    console.log(newsrc);

}


btn1.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let nwamountval=amount.value;
    console.log(nwamountval);
    if(nwamountval==="" ||nwamountval<1){
        nwamountval=1;
        amount.value="1";
    }
    // console.log(fromcr.value, tocr.value);
    const finalURL = `${URL}/${fromcr.value.toLowerCase()}/${tocr.value.toLowerCase()}.json`;

    let res=await fetch(finalURL);
    let final_fetch=await res.json();
    console.log(final_fetch);
    $rate=final_fetch[tocr.value.toLowerCase()];
    let finalamount=amount*rate;
    msg1.innerText=`${nwamountval} ${fromcr.value} = ${finalamount} ${tocr.value} `;
    // console.log(final_fetch);
})