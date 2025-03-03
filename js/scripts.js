
document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById("clickMe");
  let myDog = "Stitch"

  button.addEventListener("click", function (myDog) {
    console.log(myDog.target);
});

  const form = document.getElementById("myForm")
  form.addEventListener("submit", validateForm)
})

function validateForm(event){
  
  //prevents the form from being submitted immediately
  event.preventDefault()
  console.log(event.target)

  //declares regex
  let emailVerification = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let phoneVerification = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

  //
  let validate = true;

  //declare diffferent error message variabels
  const nameErrorMessage = document.getElementById("nameError");
  nameErrorMessage.innerHTML = "";

  const emailErrorMessage = document.getElementById("emailError")
  emailErrorMessage.innerHTML = ""

  const phoneErrorMessage = document.getElementById("phoneError")
  phoneErrorMessage.innerHTML = ""

  //declare inputs in variables
  const nameInput = document.getElementById("nameInput")
  const emailInput = document.getElementById("emailInput")
  const phoneInput = document.getElementById("phoneInput")

  //verifies name input
  if (!nameInput.value.trim()) {
    nameErrorMessage.innerText = "Please add a name";
    validate = false;
  } else if (nameInput.value.length < 5) {
    nameErrorMessage.innerText = "Username must be at least 5 characters";
    validate = false;
  }

  //verifies email
  if(!emailVerification.test(emailInput.value.trim())){
    emailErrorMessage.innerText = "Please enter a valid email address"
    validate = false
  }

  //verifies phone number
  if(!phoneVerification.test(phoneInput.value.trim())){
    phoneErrorMessage.innerText = "Please enter a valid phone number"
    validate = false
  }
  
  if(validate){
    event.target.submit();
  }
}


