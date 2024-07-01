const coin = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener("click", tossCoin);
}
function tossCoin(e) {
  let playerGuess = e.target.innerText;
  let computer = Math.floor(Math.random() * 2);
  let computerGuess = coin[computer];
  message.innerHTML = "Computer Selected : " + computerGuess + "<br/>";
  let output;
  if (playerGuess === computerGuess) {
    output = "!! Player Win !!";
    score[0]++;
  } else {
    output = "!! Computer Win !!";
    score[1]++;
  }
  message.innerHTML +=
    output + "<br/> Player : " + score[0] + " " + "Computer : " + score[1];
}
