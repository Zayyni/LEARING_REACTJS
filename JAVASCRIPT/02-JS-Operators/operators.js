/**
 * 1.arithmetic + - % / *
 * 2.shorthand += -= *=
 * 3. logical operators && || 
 * 4. Conditional : < > <= >= !==
 * 5. ternary ?:
 * 6. incr, decr ++ --
 * 7. equality == , ===
*/


let num1 = 100;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

let a = 10;
let b = 20;

let add = 100;
// add = add+(a+b)
add *= (a+b)
console.log(add)

let courseCompleted = true;
let projectFinished = false;

if(courseCompleted && projectFinished){
    console.log('You will get job')
}else{
    console.log("Keep practising")
}


let marks = 70;
let result = "";
if(marks<=35){
    result="You Failed Exam"
}else{
    result= "You Passed the exam"
}

console.log(result)

/**
 * ternary opertaor
 * (condition)?true:false
 * */

marks = 30;
result = "";
(marks<=35) ? result="You Failed Exam" : result= "You Passed the exam"
console.log(result)


// == ===

let p = 10;
let q= "10";

if(p===q){
    console.log("equal");
}else{
    console.log("not equal");
}


