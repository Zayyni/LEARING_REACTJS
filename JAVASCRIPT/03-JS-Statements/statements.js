/**
 * 1. if-else
 * 2. switch
 * 3. for-loop
 * 4. while
 * 5. do-while
 * */ 

const currentTime = 10;
let result="";
if(currentTime >=0 && currentTime <=12){
    result = "Good Morning"
}else if(currentTime >=13 && currentTime <=17){
    result = "Good Afternoon"
}else{
    result = "Good Night"
}
console.log(result)


/**
 * switch
 * */

const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

/**
 * for-loop
 * */

// print from 0 to 10
let results ="";
for(let i=0; i<=10;i++){
    results +=`${i} `;
}
console.log(results);

// print from 20 to 0 deff 2

results = "";
for (let i=20;i>=0;i-=2){
    results +=`${i} `;
}
console.log(results);

/**
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 * */ 

results="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        results +="* ";
    }
    results +=`\n`;
}

console.log(results);