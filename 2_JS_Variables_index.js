//number

let age=25;
let price=10.99;
let gpa=9.8;


console.log(age);
console.log(typeof age);
console.log(typeof price);

console.log(`I am ${age} years old`);
console.log(`My gpa is: ${gpa}`);

//string

let firstName="Astro";
console.log(typeof firstName);
console.log(firstName);

//boolean

let eligible=true;
console.log(typeof eligible);
console.log(eligible);

document.getElementById("p1").textContent=firstName;
document.getElementById("p2").textContent=`You are ${age} years old`;
document.getElementById("p3").textContent=`Enrolled : ${eligible}`;

//3rd video was about aritmetic operators.