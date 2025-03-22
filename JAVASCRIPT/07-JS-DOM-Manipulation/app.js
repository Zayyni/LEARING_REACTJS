console.log(document);
console.log(document.title);
document.title="Changed from js File";
console.log(document.body);
const h1Element=document.querySelector("h1");
console.log(h1Element);
h1Element.innerText="HEllo I am from Java Script";

h1Element.innerHTML=`<span style="color: red">Hello JS</span>`;


const changeTextButton = document.querySelector("#change-txt-btn");
changeTextButton.addEventListener('click',()=>applyStyles());
//apply styles
const applyStyles=()=>{
    const msgElement= document.querySelector("#msg");
    msgElement.style.backgroundColor ="grey";
    msgElement.style.color="teal";
    msgElement.style.padding="10px";
    console.log(msgElement);
};

const changeImage=()=>{
    // change width and height of image

const imageElement=document.querySelector("#food-image");
imageElement.style.width="300px"

// change attributes
const imageUrl ="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg";
imageElement.setAttribute("src",imageUrl);
}

// change password box to text box

const showPassword=()=>{
const inputElement= document.querySelector("#input");
const buttonElment=document.querySelector("#the-button");
if(inputElement.getAttribute("type")==="password"){
    buttonElment.innerText="Hide Password";
    inputElement.setAttribute("type","text");
}else{
    buttonElment.innerText="Show Password";
    inputElement.setAttribute("type","password");
}}


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

const displayEmployees=()=>{
let tableRowElement="";
for(let employee of empoyees){
    tableRowElement +=`<tr>
                            <td>${employee.sno}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.designation}</td>
                        </tr>\n`
}

const tableBodyElement=document.querySelector("#table-body");
tableBodyElement.innerHTML = tableRowElement;
}