// string
const employeeName:string="John";
console.log(employeeName);
//number
const employeeAge:number=40;
console.log(employeeAge);

//boolean
const isManager:boolean=true;
console.log(isManager);

//Object

interface Mobile{
    brand:string;
    color:string;
    price:number;
}


const mobile:Mobile={
    brand:"Nokia",
    color:"Blue",
    price:23445
}
console.log(mobile);

// Array
const colors:string[]= ["White","Black","Silver","Golder"];
console.log(colors);

// any

let abc:any=100;
abc="Test"