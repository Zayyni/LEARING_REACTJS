/* 
    how to prepare coffee
    1. Get milk from shop
    2. Boil Milk
    3. Add sugar & coffee
*/

const getMilkFromShop=()=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("1. Get Milk from shop");
    },3000);
   });
};

const boilMilk=()=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("2. Boil Milk");
    },1000);

   });
};

const addSugerAndCoffee=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("3. Add sugar & coffee");
        },500);
    });
};

const makeCoffee=()=>{
    getMilkFromShop().then((msg)=>{
        console.log(msg);
        boilMilk().then((msg)=>{
            console.log(msg);
            addSugerAndCoffee().then((msg)=>{
                console.log(msg);
            })
        })
    }).catch((error)=>{
        console.log(error);
    });
    
};
makeCoffee();