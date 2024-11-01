function clickTryAgain() {
  console.log('Button Clicked!')
}
function reset() {
  home = 0
  away = 0
  drawHome()
  drawAway()
}

let home = 0
let away = 0

function addScore(location, score) {
  if (location == "home") {
    home += score
    drawHome()
  }
  if (location == "away") {
    away += score
    drawAway()
  }
}

function drawHome() {
  let homeScoreElm = document.getElementById('home-score')
  // NOTE can always be brought back but isn't necessarily needed through console (?)console.log(homeScoreElm)
  homeScoreElm.innerText = home
}

function drawAway() {
  let awayScoreElm = document.getElementById('away-score')
  // NOTE can always be brought back but isn't necessarily needed through console (?)console.log(homeScoreElm)
  awayScoreElm.innerText = away
}

