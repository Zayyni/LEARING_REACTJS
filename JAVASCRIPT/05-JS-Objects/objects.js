const student={
    name:"Zayyni",
    age : 23,
    course:"CS",
    college :"LGU"
};
console.log(student);
console.log(student.course);// CS
console.log(student.test);//undefined
console.log(student['name']);

// dynamic props
const propName ="age";
console.log(student.propName);// undefined
console.log(student[propName]);// undefined

// nested objects

const user={
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }
console.log(user);
console.log(user.address);

console.log(`Lat : ${user.address.geo.lat} Ln : ${user.address.geo.lng}`);

// destructuring

let {lat: theLat,lng: theLag} = user.address.geo;
console.log(`Lat : ${theLat} Ln : ${theLag}`);

// Json <-> Object

/**
 * Object -> Json -> Json.stringify();
 * Json -> Object -> Json.parse();
 * 
 * */ 

const mobile={
  brand:"Apple",
  color:"Silver",
  price : 350000
}
let mobileStr= JSON.stringify(mobile);
console.log(mobileStr);


let mobileObj= JSON.parse(mobileStr);
console.log(mobileObj);

/*
get all keys
get all values
get all entries
*/ 

console.log(Object.keys(mobile))
console.log(Object.values(mobile))
console.log(Object.entries(mobile))

