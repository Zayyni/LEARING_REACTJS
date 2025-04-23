/* 
    how to prepare coffee
    1. Get milk from shop
    2. Boil Milk
    3. Add sugar & coffee
*/

const getMilkFromShop=(boilMilk,addSugerAndCoffee)=>{
    setTimeout(()=>{
        console.log("1. Get Milk from shop");
        boilMilk(addSugerAndCoffee);
        
    },3000);
};

const boilMilk=(addSugerAndCoffee)=>{
    setTimeout(()=>{
        console.log("2. Boil Milk");
        addSugerAndCoffee();
    },1000);
};

const addSugerAndCoffee=()=>{
    setTimeout(()=>{
        console.log("3. Add sugar & coffee");
    },500);
};

const makeCoffee=()=>{
    getMilkFromShop(boilMilk,addSugerAndCoffee);
    
};
makeCoffee();