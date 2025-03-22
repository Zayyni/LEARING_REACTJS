const colors =["white","black","green"];
console.log(colors);
console.log(colors[2]);
console.log(colors.length)

// normal forloop

let result ="";
for(let i=0;i<=colors.length-1;i++){
    result += `${colors[i]} `

}
console.log(result)

// for in loop
result ="";
for(let index in colors){
    result += `${colors[index]} `

}
console.log(result)

// for of loop
result ="";
for(let color of colors){
    result += `${color} `

}
console.log(result)

/*
for each fucntion
*/ 

result="";
colors.forEach(function (color){
    result += `${color} `
})
console.log(result)

/*
for each with arrow fucntion
*/ 

result="";
colors.forEach((color)=> result += `${color} `)
console.log(result)


/**
 * complex array
 * */ 

const empoyees =[
    {
    sno:"A001",
    name:"Zayyni",
    age:24,
    designation:"Software Engineer"
    },
    {
        sno:"A002",
        name:"Zay",
        age:26,
        designation:"Software Engineer"
    },
    {
        sno:"A003",
        name:"Za",
        age:25,
        designation:"QA Engineer"
    },
    {
        sno:"A004",
        name:"yni",
        age:34,
        designation:"DEV Engineer"
    },
]
console.log(empoyees)


/**
 * print junior Employees age <=26
 * */ 

const jrEmployees=[];
for(let empoyee of empoyees){
    if(empoyee.age<=26){
        jrEmployees.push(empoyee)
    }
}
console.log(jrEmployees)

/**
 * filter
 * */
const juniorEmpoyees = empoyees.filter((employee)=>employee.age<=30);
console.log(juniorEmpoyees)

/**
 * map
 * */
const juniorEmpoyees1 = empoyees.map((employee)=>{
    return employee.name});
console.log(juniorEmpoyees1)


