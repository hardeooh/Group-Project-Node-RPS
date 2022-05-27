document.querySelector('#getRocked').addEventListener('click', makeReq)


async function makeReq(){
  const userPick = document.querySelector("#playGame").value;
  console.log(userPick)
  const res = await fetch(`/api`)
  const data = await res.json()
  const checkWinner = calculateWin(userPick,data.result)
  console.log(data.result, userPick, checkWinner)
}

//Ciru Function to calculate winner
function calculateWin(userChoice, computerChoice) {
  if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) return 'You win!';
  else if (userChoice === computerChoice) return "It's a tie!";
  else return "You Lose!";
}