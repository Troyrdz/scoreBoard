let homeEL = document.getElementById("home-score")
let awayEl = document.getElementById("away-score")
let score = 0
function addOnehome(){
    score += 1
    homeEL.textContent = score
}

function addTwohome(){
    score += 2
    homeEL.textContent = score
}

function addThreehome(){
    score += 3
    homeEL.textContent = score
}

function addOneaway(){
    score += 1
    awayEl.textContent = score
}

function addTwoaway(){
    score += 2
    awayEl.textContent = score
}

function addThreeaway(){
    score += 3
    awayEl.textContent = score
}