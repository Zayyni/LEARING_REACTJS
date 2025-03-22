
// Console Statements
console.log("I am a log message");
console.info("I am information message");
console.warn("I am a warning message");
console.error("I am an error message");
console.table({name:"Zayyni",age:12})


/*
    variable declaration
    1. camelCase for variables
    2. never start with a number
    3. a-z, $, _ allowed
*/


/*
    Data types allowed string, number, boolean, object, array
*/

let a = 10;

const employeeName = "John";
console.log("Employee Name : "+employeeName);

/*
    backtick operator (`)
*/

console.log(`Employee Name : ${employeeName}`)

const employeeAge = 44;
console.log(`Employee Age is ${employeeAge}`)

const isManager = true;
console.log(`is Manager ? ${isManager}`)

// Employee Object

const employee = {
    name :"John",
    age : 33,
    isManger :true
};

console.log(employee);
console.log(employee.name);

// Array

let techs =["html","css","javascript"];
console.log(techs);
console.log(techs[2])

