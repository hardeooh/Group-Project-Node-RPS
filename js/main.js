document.querySelector('#getRocked').addEventListener('click', makeReq)


async function makeReq(){
  const userPick = document.querySelector("#playGame").value;
  const res = await fetch(`/api`)
  const data = await res.json()
  const checkWinner = [verifyUserChoice(userPick), calculateWin(userPick,data.result)]
  renderResults(checkWinner)
  console.log(data.result, userPick, checkWinner)
}

//Ciru Function to calculate winner
function calculateWin(userChoice, computerChoice) {
  if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) return 'You win!';
  else if (userChoice === computerChoice) return "It's a tie!";
  else return "You Lose!";
}

//Check if error message exist in index 0, if not render winner in index 1
function renderResults(winner){
  if(winner[0]){
    document.querySelector('#renderResult').textContent = winner[0]
  } else {
    document.querySelector('#renderResult').textContent = winner[1]
  }
}

//Check if user has inputted a valid value
function verifyUserChoice(userValue){
  const userValueToLowerCase = userValue.toLowerCase().trim()
  if (userValueToLowerCase==='rock' || userValueToLowerCase==='paper' || userValueToLowerCase==='scissor'){
    return ""
  } else {
    return 'You must pick rock, paper, or scissor'
  }
}