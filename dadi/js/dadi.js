function lancio() {
  var userNumber = Math.floor((Math.random() * 6) + 1);
  var pcNumber = Math.floor((Math.random() * 6 ) + 1);

  var winnerElement = document.getElementById("winnerElement");
  var userNumberElement = document.getElementById("userNumberElement");
  var pcNumberElement = document.getElementById("pcNumberElement");

  userNumberElement.innerHTML = "Il tuo numero è: " + userNumber;
  pcNumberElement.innerHTML = "Il numero del pc è: " + pcNumber;

  if (userNumber > pcNumber) {
    winnerElement.style.color = "green";
    winnerElement.innerHTML = "Hai vinto!";
  } else if (userNumber < pcNumber) {
    winnerElement.style.color = "red";
    winnerElement.innerHTML = "Hai perso! :c";
  } else {
    winnerElement.style.color = "brown";
    winnerElement.innerHTML = "Pareggio";
  }
}
