
let count=document.getElementById("mylabel");

document.getElementById("incbutton").onclick=function(){
    count++;
    document.getElementById("mylabel").textContent=count;
}
document.getElementById("decbutton").onclick=function(){
    count--;
    document.getElementById("mylabel").textContent=count;
}
document.getElementById("resetbutton").onclick=function(){
    count=0;
    document.getElementById("mylabel").textContent=count;
}