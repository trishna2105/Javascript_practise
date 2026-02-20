//window prompt, easy way:

/*
let username;
username=window.prompt("Whats your username?");
console.log(username);
*/

//html textbox: professional way:
let username;
document.getElementById("myButton").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myHeader").textContent=`Hello ${username}`;
}

//5: type conversion: Number, String, Boolean
let x="pizza";
x=Boolean(x);
console.log(x,typeof x);


