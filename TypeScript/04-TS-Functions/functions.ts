const greet=(name:string,age:number):void=>{
    let result:string=`Hello ${name}, you are ${age} old`;
    console.log(result);
}
greet("John",40);

// print Object

interface Student{
    name : string;
    age : number;
    college:string;
};

const printStudent=(student:Student):void=>{
    const result:string = JSON.stringify(student)
    console.log(result);
}

const student:Student ={
    name :"Zayyni",
    age: 21,
    college:"LGU"
}
printStudent(student);