const button = document.getElementsByClassName("first-button");
const button2 = document.getElementsByClassName("second-button");
const cardHolderName = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const form = document.getElementById("form");
const names = document.getElementById("name");
const years = document.getElementById("years");
const months = document.getElementById("months");
const cvcs = document.getElementById("cvcs");
const numbers = document.getElementById("card-numbers");


names.addEventListener("input", (e) =>{})
years.addEventListener("input", (e) =>{})
months.addEventListener("input", (e) =>{})
cvcs.addEventListener("input", (e) =>{})
numbers.addEventListener("input", (e) =>{})


function updateCardName(input){
  names.innerHTML= input.value;
}
function updateCardNumber(input){
  numbers.innerHTML= input.value.replace(/\d{4}(?=\d)/g, '$& ');
}
function updateCardMonth(input){
  months.innerHTML= input.value;
}
function updateCardYear(input){
  years.innerHTML= input.value;
}
function updateCardCVC(input){
  cvcs.innerHTML= input.value;
}



const validateInput = () =>{
  if (cardHolderName.value.trim()===""){
    let parent = cardHolderName.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    parent.classList.add("errors");
    return false;
  }
  else if (!cardHolderName.value.match(/^[a-z ,.'-]+$/i)){
    let parent = cardHolderName.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    errorMessage.innerHTML= "please input name correctly";
    parent.classList.add("errors");
    return false;
  }

 else  {
    let parent = cardHolderName.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="hidden";
    parent.classList.remove("errors");
  }

  if (cardNumber.value.trim()===""){
    let parent = cardNumber.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    parent.classList.add("errors");
    return false;
  }
  else if (!cardNumber.value.match(/^[0-9]+$/)){
    let parent = cardNumber.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    errorMessage.innerHTML= "wrong format, numbers only";
    parent.classList.add("errors");
    return false;
  }
  else if (cardNumber.value.length !== 16) {
    let parent = cardNumber.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    errorMessage.innerHTML= "check card number"
    parent.classList.add("errors");
    return false;
  }
  else  {
    let parent = cardNumber.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="hidden";
    parent.classList.remove("errors");
  }

  if (month.value.trim()===""){
    let parent = month.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    parent.classList.add("errors");
    return false;
  }
  else if(month.value.length !== 2){
    let parent = month.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    errorMessage.innerHTML= "invalid format"
    parent.classList.add("errors");
    return false;
  } 
  else  {
    let parent = month.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="hidden";
    parent.classList.remove("errors");
  }

  if (year.value.trim()===""){
    let parent = year.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    parent.classList.add("errors");
    return false;
  }
  else if(year.value.length !== 2){
    let parent = year.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    errorMessage.innerHTML= "invalid format"
    parent.classList.add("errors");
    return false;
  }
  
  if (cvc.value.trim()===""){
    let parent = cvc.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    parent.classList.add("errors");
    return false;
  }
  else if(cvc.value.length !== 3){
    let parent = cvc.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="visible";
    errorMessage.innerHTML= "invalid format"
    parent.classList.add("errors");
    return false;
  }
  else  {
    let parent = cvc.parentElement;
    let errorMessage = parent.querySelector(".error-message");
    errorMessage.style.visibility="hidden";
    parent.classList.remove("errors");
  }

}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   let isFormValid =  validateInput();
   let validForm = isFormValid;
   if (validForm !== false){
    form.style.display="none";
    document.querySelector(".complete-state").style.visibility="visible";
   }
});

function refreshPage(){
  window.location.reload();
}



