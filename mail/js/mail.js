function checkEmail() {
  var emails = ["mariorossi@gmail.it", "2b@yahoo.it", "brandobaldo@libero.it"];
  var emailUser = document.getElementById("emailElement").value;
  var message = document.getElementById("messageElement");

  var emailIsValid = false;

  for (i = 0; i <= emails.length; i++) {
    if (emails[i] == emailUser) {
      message.style.color = "green";
      message.innerHTML = "la email è valida per il login!";
      emailIsValid = true;
    } else if (i >= emails.length && emailIsValid == false) {
      message.style.color = "red";
      message.innerHTML = "la email non è valida!";
    }
  }
}
