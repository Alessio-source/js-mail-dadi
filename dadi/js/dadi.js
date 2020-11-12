function lancio() {
  var userNumber = Math.floor(Math.random() * 6);
  var pcNumber = Math.floor(Math.random() * 6);

  var winnerElement = document.getElementById("winnerElement");

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
