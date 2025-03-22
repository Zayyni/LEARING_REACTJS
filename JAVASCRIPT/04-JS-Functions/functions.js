/**
 * 1. normal function
 * 2. function expression
 * 3. arrow function
 * */ 

function greetNF(name){
    console.log(`I am from greetNF ${name}`)
}
greetNF("Zayyni");

let greetFE = function(name){
    console.log(`I am from greetFE ${name}`)
}
greetFE("John")

let greetAF = (name) => {
    console.log(`I am from greetFE ${name}`)
}
greetAF("JoNn");
const sum=(a,b)=>{
    let result = a+b;
    return result;
}
let thesum = sum(10,20);
console.log(thesum);

const printNumnber = (startNumber,endNumber)=>{
    let results ="";
for(let i=startNumber; i<=endNumber;i++){
    results +=`${i} `;
}
console.log(results);
}
printNumnber(0,10);


