const userEmail = prompt("Inserisci la tua Email per vedere se sei gia registrato");
const emails = ["User1.@gmail.com", "User2.@gmail.com", "R3iji94@gmail.com", "random@yahoo.it", "fake.email@protonmail.com"];

if (userEmail == "") {
  alert("entry required");
  console.log("non e stato inserita nessuna email");
}
else if(userEmail == null){
  console.log("user pressed cancel")
}
else{
  if (emails.includes(userEmail)){
    alert("sei registrato");
    console.log("L'email c'e nell'array");
  }
  else if(!emails.includes(userEmail)){
    alert("non sei registrato");
    console.log("L'email non c'e nell'array");
  }
}

