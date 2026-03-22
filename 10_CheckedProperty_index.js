const myCheck=document.getElementById("myCheck");
const visabtn=document.getElementById("visabtn");
const masterbtn=document.getElementById("masterbtn");
const paypalbtn=document.getElementById("paypalbtn");
const myButton=document.getElementById("myButton");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

myButton.onclick=function(){
    if (myCheck.checked){
        subresult.textContent="You are subscribed";
    }
    else{
        subresult.textContent="You are not subscribed";
    }
    if (visabtn.checked){
        paymentresult.textContent="You are using Visa Card for payment";
    }
    else if (masterbtn.checked){
        paymentresult.textContent="You are using MasterCard for payment";
    }
    else if (paypalbtn.checked){
        paymentresult.textContent="You are usign Paypal Card for payment";
    }

}