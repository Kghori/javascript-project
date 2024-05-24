// document.write("hello");
const para = document.querySelector("#data1");
const btn = document.querySelector("#btn");
const URL = "https://cat-fact.herokuapp.com/facts";
const getdata= async () =>{
    // document.write("data fetching......");
    console.log("data fetching......")
    const result=await fetch(URL);
    // document.write("result:"+result);
    console.log(result)
    const data=await result.json();
    // document.write("status:"+data[0].status);
    console.log(data[0].text);
   para.innerHTML=data[1].text;
}
// getdata();
btn.addEventListener("click",getdata);