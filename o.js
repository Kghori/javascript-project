// // console.log("hello");
// // console.log("how are you");
// // var na=null;
// // console.log(na);
// // console.log(typeof(na));
// // na=21;
// // console.log(na);
// // console.log('----------------------------');
// na=22
// console.log("hello"-"howar");//NaN
// console.log("hello"+"hello");

// console.log("hello"*2);//nan
// console.log("hello"/2);
// console.log(isNaN(na));//false
// h="h1llo";
// console.log(isNaN(h));//true
// h=0.12; 
// // console.log(Number.NaN===Nan);//errro

// // NaN === NaN
// // Number.NaN===NaN;
// console.log(Number.NaN===NaN);//false
// let a="ege"
// console.log(isNaN(a));
// var i=20;
// var i=20;
// console.log(i+i);
// console.log("helo:"+i-i);
// // console.log(i--);
// console.log(i/2);

// console.log(i/=2);
// console.log(i*2);
// console.log(i**2);//400 square
// console.log(i**3);



// var num=20;
// var newnum=num++;//(num+1)

// console.log(num);//21
// console.log(newnum);//20


// var num=21;
// var newnum=++num;
// console.log(num);//22
// console.log(newnum);//22


//    var num=22;
//    var newnum=--num +1;
//    console.log(num);//22
//    console.log(newnum);//22\

// var num=22;
//    data=num*=5;//110
//    console.log(data);


//    var num=2;
//    data1=num**=5;//32
//    console.log(data1);

//    console.log(num);
   


// var num=20;
// var n1=202;

// console.log(num!==n1);
// console.log(num===n1);


// var x=20;

// var y="20";
// console.log("compare:");
// console.log(x!=y);


// let c="5";
// let b="3";
//  b=12;
// result = c >= b;

// console.log(typeof result);


/*relational  operatot */
// let x=7;
// // document.write(x);

// console.log(x>56);
// let a=10,b=2,c=4;
// console.log(a>=b | c<=b);



//combine the condition 
// let x=10,y=12;

// console.log(x>y & y>x);//0
// console.log(x>y && y>x);//false
// console.log(x>y | y>x);//1
// console.log(x>y || y>x);

// let x=10,y=12;

// console.log(x!=y);

// if(result=x%2==0){
    //     if(result==false){
        //     console.log("odd num");
        // }}
        
        // if(x >= y)
        //     console.log("x greater y");
        
        // else
        //     console.log("y is greater y");
        //     console.log("z is greater y");
        
        //x greater y
//z is greater y







// if(x >= y){
    //         console.log("x greater y");
    // }
    //     else{
        //         console.log("y is greater y");
        //         console.log("z is greater y");
        
        //     }
        // x greater y
        
// let xy=6,yz=4; 
//     if(xy>yz){
//         console.log("x is greater");
//     }
//     else if(xy>yz){
//         console.log("y is greater y");
//         console.log("hello bhai");
        
//     }
 /* tanary oparator */

// let x=10;
// let y=12;
// let result= x%2==0 ? "true":"false";
// console.log(result);






/***********************************switch */
// let choice=1;
// switch(choice){

//     case 1:
//         console.log("case 1");
//     case 2:
//         console.log("case2");
//     case 3:
//             console.log("case 3");
//     default:
//         console.log("not applit::");
// }
/* if oyu want to applit to this sswitch then it not break statement apply */
// case 1
// case2
// case 3
// not applit::

// var choice=1;
// switch(choice){

//     case 1:
//         choice=12;
//         console.log("case 1 "+choice);
//         console.log("case 1 "+choice);
//         break;
//     case 2:
//         console.log("case2");
//         console.log("he;");
//         break;
//     case 3:
//             console.log("case 3");
//             break;
            
//     default:
//         console.log("not applit::");
//         break;
// }

// case 1 12
// case 1 12

// let i=1;
// let a=10;
// while(a>i){
//     console.log(i);
//     i++;
// }



/*(****************do whike)*/
// let i=0,a=10;
// do{
//     console.log("hello");
//     i++;

// }while(i<a);


// let n=12345;
// for(let i=0;i<n;i++){
//     if(i%10==0){
//         console.log(i);
//     }
//     else{
//         console.log("odd ${}"+i);
//     }
// }

// function hello(){
//     a={car:12,bike:"hii"};
//     console.log(a.car);

// }
// hello();

/*************ags with data */
// let x=hello(12, 2);

// function hello(a, b){
//     // a={car:12,bike:"hii"};
//     // console.log(a.car);
//     console.log(a);
//     return console.log(a * b);

// }

// function lik(){
//     console.log("he;;;0");

// }
// let c=lik();


// function hello(name){
    
//         return name;
// }
// let values=hello(12);
// // console.log(values);


// function school(rollno,name,salary,values){

//     return console.log(rollno+name+salary+values);
// }
// let values=school(12,"kartik",12000,123);

// var greet = function(name) {
//     return "Hello, " + name + "!";
// };
// var s=greet("kartik");
// console.log(s);



// let g=12;
// function hello(g){
//    return  console.log(g);
// }
// hello(12);
// f="hello kar\btik";//hello katik
// f="hello kar\ftik";//hello kar♀tik
// f="hello kar\ntik";//hello kar
// // tik
// f="hello kar\rtik";
// console.log(f);
// var h=f.length;
// console.log(h);


// let x=new String("hitesh");
// console.log(x);
// const a=[1,2,3,4];
// for(i in a){
//     console.log(a);
//     break;
// }



// let a={
//     a:12,
//     b:'kartik',

// }
// console.log(a.b?.length);



// a=12;
// console.log(a);


// function hello(a){
//     console.log(a);
// }
// hello(1);
// hello(2);
// hello(3);
// hello(4);
// let a=10;
// let i=0;
// function hello(){
//     while(a!=0){
//         console.log(a);
//         i++;
//     }
// }
// hello();




// const gre=(a,b) => {
//     let c= a+b;
//     console.log(c);
// }
// for(let i=0;i<6;i++){
// gre(222,222);

// }


// const reverse=(i,a,val) =>{
//     let reverse=0;
//     while(val!=0){
//         // let va;
        
//         let rem=val % 10;
//        reverse=reverse * 10 + rem;
//        val = Math.floor(val / 10);
//     }
//     console.log(reverse);
   
   
// }

// const palindrone=(val) =>
// {
    
//     let reverse=0,temp=val;
//     while(val != 0)
//     {
//             let rem=val % 10;
//            reverse=reverse * 10 + rem;
//             val = Math.floor(val / 10);
            
//     }
//     if(temp==reverse)
//     {
//         console.log("its palindrone num");
//     }
// }


// palindrone(122);
// reverse(1,10,123456);





// const profile={
//     username:"karitk",
//     picture:"1.jpg",
//     thread:"@kartikghori",
//     profession:"developer",
//     description:"life is a poem",
//     // follower:123,
//     isfollow:123,

    

// }
// console.log(profile);



// let h=prompt("enter num:");
// if(h%2===0){
// document.write(h,"its divided into  2");
// }
// else{
//     document.write(h,"its not divided into 2");
// }


// const a=prompt("enter percentage:");
// if(a>80 && a<100){
//     document.write("A");

// }else if(a>70 && a<89 )
// {
//     document.write("B");
// }else if(a>60 && a<69)
// {
//     document.write("C");
// }else if(a>50 && a<59)
// {
//     document.write("D")
// }













// /* ---------------------call back---------------------------------*/
// function calculator(a,b){
//     console.log(a+b);
    
// }
// function sum(){
//     calculator(1,2);
// }
// sum();





// function calculator(a,b){
//     setTimeout(()=>{
//         console.log(a+b);
//     } , 3000);
//     }
// function sum(){
//     calculator(1,2);
// }
// sum();

// console.log("h1llo 1");
// setTimeout(()=>{
    
//     console.log("jello");
// },4000);
// console.log("h1llo 1");






/* callback*/
// function getdata(one){
//    setTimeout(() => {
//     console.log(one);
//    }, 1000); 
// }
// getdata(1);
// getdata(12);
// getdata(14);
// getdata(14);


//printone by one 

// function getdata(one,nextdata){
//     setTimeout(() => {
//      console.log(one);
//      if(nextdata){
//             nextdata();
//      }
//     }, 1000); 
//  }




//  //callback hell
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(4);
//     });
// });





///////when callbackhell problem solved promises



// let promise  = new Promise((resolve,reject)=>{
//     {
//         console.log('promise');
//        reject("sime");

//     }
// })

///basic of promixe

// function getdata(one){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("success", one); // Corrected typo here
//         resolve("success");
//     }, 4000);
// });
// }
// getdata(12);




// function getdata(one){
//     return   new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("promise 1 data1...",one);
//         resolve("sucess");
//        },4000); 
//     });
// }
// function getdata2(two){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("promise 2 data2...",two);
//         resolve("sucess");    },4000);
//     }
//     );
// }
// let p=getdata(12);
// p.then(()=>{
//     console.log(p);
// })
// console.log("data 1 fetched");

// let p1=getdata2(12);
// p1.then(()=>{
//     console.log(p1);
// })
// console.log("data 2 fetched");






//////i thought one fetch data then second fetch data then use promise chain\


// function getdata(one){
//     return   new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("promise 1 data1...",one);
//         resolve("sucess");
//        },4000); 
//     });
// }
// function getdata2(two){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("promise 2 data2...",two);
//         resolve("sucess");    },4000);
//     }
//     );
// }



// // this is actual promise chain
// getdata(23).then(()=>{
//     return getdata(23);
// }).then(()=>{
//     return getdata(43);
// }).then(()=>{
//     return getdata(53);
// })
// let p=getdata(12);
// p.then(()=>{
//     console.log(p);
//     console.log("data 1 fetched");
//     let p1=getdata2(14);
//     p1.then(()=>{
//         console.log(p1); 
//         console.log("data 2 fetched");
//     })
// })
// console.log("data 1 fetched");





///this code formate vary difficult to manmage execution so then async and await is used
////async alwalys promise and await are waiting a statte when asyn are not receive that means promise are not reeive
// async function hello(){
//     console.log("hello async function");

// }
// hello();





////await


// function api(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>
//         {
//             console.log("all api id are fetched id no is",id);
//             resolve("sucess");
//         },4000);
        
//     });
    
// }

// async function call(){
//     await api(12);
//     console.log("12 fetched...");
//     await api(13);
//     console.log("13 fetched...");
//     await api(14);
//     console.log("14 fetched...");

//     await api(15);
//     console.log("15 fetched...");
//     await api(16);
//     console.log("16 fetched...");


    
// }

// call();




// in above examples are used to the unnecessary call to funciton ca;;; then IIFE used in js so its concept of advance js
//its only one time call
// function api(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>
//         {
//             console.log("all api id are fetched id no is",id);
//             resolve("sucess");
//         },4000);
        
//     });
    
// }

// (async function (){
//     await api(12);
//     console.log("12 fetched...");
//     await api(13);
//     console.log("13 fetched...");
//     await api(14);
//     console.log("14 fetched...");

//     await api(15);
//     console.log("15 fetched...");
//     await api(16);
//     console.log("16 fetched...");


    
// })();






// //api fetch
// const URL="https://cat-fact.herokuapp.com/facts";
// // let prom=  fetch(URL);
// // console.log(prom);




//api fetch method
// const URL="https://cat-fact.herokuapp.com/facts";
// const fetfacts = async () =>{
//     console.log("gettting data .......")
//     let fet= await  fetch(URL);
//     console.log(fet);
//     let data= await fet.json();
//     console.log(data[12].text);
// }



const fetfacts = async () =>{
    console.log("gettting data .......")
    let fet= await  fetch(URL);
    console.log(fet);
    let data= await fet.json();
  //  fetchdata.innerHTML=[0].text;
  let dat=data[0].text;
  document.write(dat);
}