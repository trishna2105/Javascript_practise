//let x=Math.random();

//To get random numbers between 0 and 6:
//let x=Math.random()*6;

//To get only integers without the long decimal numbers:
//let x=Math.floor(Math.random()*6);

//To get random numbers between 1 and 6:
//let x=Math.floor(Math.random()*6)+1;

//To get a random number between a min and max value:
let mini=50;
let maxi=100;
//let x=Math.floor(Math.random()*(maxi-mini))+mini;


//console.log(x);

let button=document.getElementById("button1");
let label=document.getElementById("label1");

button.onclick=function(){
    label.textContent=Math.floor(Math.random()*(maxi-mini))+mini;
}
