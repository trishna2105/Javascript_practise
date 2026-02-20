//const: a variable that cannot be changed.
const PI=3.14;
let radius;
document.getElementById("myButton").onclick=function(){
    radius=document.getElementById("myText").value; 
    radius=Number(radius);
    document.getElementById("myHeader").textContent="The circumference is: "+2*PI*radius+" cm";
}
