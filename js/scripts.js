
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
  event.preventDefault()
  console.log(event.target)

  let validate = true;

  const errorMessage = document.getElementById("nameError");
  errorMessage.innerHTML = "";
  const nameInput = document.getElementById("nameInput");
  if (!nameInput.value.trim()) {
    errorMessage.innerText = "Please add a name";
    validate = false;
  } else if (nameInput.value.length < 5) {
    errorMessage.innerText = "Username must be at least 5 characters";
    validate = false;
  }
  
  if(validate){
    event.target.submit();
  }
}


