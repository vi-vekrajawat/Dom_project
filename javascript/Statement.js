// let age = 9;
// if(age>18){
//     console.log("Elegible for vote")
// }
// else{
//     console.log("not eligible")
// }


// if else if else

// let age =34;
// if(age<18){
//     console.log('kid')
// }
// else if(age>45){
//     console.log('Old')
// }
// else{
//     console.log('young')
// }


// multiple condition switch

// let num = 9;
//new Date().getDay() current day pta krne ke liye
// console.log(num)
// switch(num){
//     case 0 : console.log("sinday")
//     break;
//     case 1 : console.log("Monday")
//     break;
//     case 2 : console.log("Tuesday")
//     break;
//     case 3 : console.log("Wednesday")
//     break;
//     case 4 : console.log("Thrusday")
//     break;
//     case 5 : console.log("Friday")
//     break;
//     case 6 : console.log("SATURDAY")
//     break;
//     case 7: console.log("Sunday")
//     break;
//     default : console.log("Something went wrong")
    
// }

// let x = 49  ye error dega
// else{
//     console.log("Hiiii")
// }
// if(x>10){
//     console.log("hloooo")
// }


// for(let x =0;x<3;){
//     console.log("hiii")
// }
// agr increment or decriment ki condition nhi di to loop infinite chalega



// for(let x =0; ;x++){
//     console.log("hiii")
// }
// abhi bhi loop infinite chalega


// for(; x<3;x++){
//     console.log("hiii")
// }
// ab nhi chalega kyuki 'x' is not defined


// for(; ;){
//     console.log("hiii")
// }
// it will run infinite time 

// for(; ;){
//     console.log("hiii")
// }
// loop run krne ke liye 2 semicoloen jarur hone chaiye loop ke andr other wise ye error dega 
// aur agr do demicolon hai to run hoga
// first expression intialization ke liye hoti hai ---> ye ek baar hi chalta hai 
// fir condition check hoti hai 
// increment hota hai

// for(const x = 0; x<4;x++){
//     console.log("hiii")
// }
// isme x variable ko const bna diya jisse uski value fix ho gyi ab use change nhi kr sakte isliye ye error dega 

// let sum = 0
// for(let x =0;x<11;x++){
//     sum+=x
// }
// console.log(sum)
// 1 se 10 tak ka sum 
// isme i ke sum ke baar baar naya allocation hota hai jisse ye c++ se slow hai jbki c++ me esa nhi hota 
//(isme ek condition chalne ke jab inceremne hota hai to memory me in sbke ke fir ek naya allocation hota aur run hota hai)
// isiliye c++ more fast language hai 

// Nested loop


/*for(let x =0; x<3;x++){      //0  //0  //0
    for(let y=0;y<3;y++){    //1  //1  //1
        console.log(y)       //2  //2  //2 ye ek ke niche ke print karayega

    }
}*/



// for(let x =0;x<5;x++){
//     let row = "";
//     for(let y =0;y<5;y++){
//         row += y;
        
//     }
//     console.log( row.trim())
//     // console.log("\n")
// } 
// 01234
// 01234
// 01234
// 01234 ye aese print kareyega


// scope ke bare me 
// global , block , local scope(functional scope)


// global scope , globaly decalaration 
// let a = 10;
// var b = 20;
// const c = 10;
// inko koi v aur kahi v access kr sakta hai 


//local scope 
// function greet(){
    // let x = 10;
    // var y = 34;
    // const z = 23;
    // inko function ke bahar acess nhi kr sakte
// }
// greet();


// block scope is block ke bahar isko access nhi kr sakte 
// {
    // let x = 10;
    // var y = 34;
    // const z = 23;
// }
// lakin var wale ko access kr sakte hai
// var amount = 45
// var amount = 56
// ye var me do baar kr sakte hai lakin let const ke sath nhi isiliye iska use nhi krte isse prblm aa sakti hai large project me 


// for(var a =0;a<4;a++){
//     console.log(a)
// }
// console.log(a)