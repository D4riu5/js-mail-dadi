const userEmail = document.getElementById('email-input');
const emails = ["User1.@gmail.com", "User2.@gmail.com", "R3iji94@gmail.com", "random@yahoo.it", "fake.email@protonmail.com"];
const submit = document.querySelector('.submit-input');
const output = document.getElementById("output");

submit.addEventListener ('click',
  function checkEmail() {
    if (userEmail.value == "") {
      alert("non hai inserito l'Email")
      console.log("non e stato inserita nessuna email");
    }

    else{

      if (emails.includes(userEmail.value)){
        output.innerHTML = "Sei registrato";
      }
      else if(!emails.includes(userEmail.value)){
        output.innerHTML = "Non sei registrato";
      }
    }

  }
)
// Reset button
document.querySelector('.reset').addEventListener ('click',
  function() {
    userEmail.value = "";
    output.innerHTML = "";
  }
)