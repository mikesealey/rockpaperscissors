let userScore = 0
let computerScore = 0

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function changeVideo(url) {
    document.getElementById('ytVideo').src = `${url}`
    // So this was a silly litle feature that is supposed to change the 
    // tutorial video on the page in to a different video depending on the outcome
    // HOWEVER it seems to have issues around certain ad-blocking extensions
    // and may need to trigger a re-load of the entire video element
    // which is most likely currently above my pay-grade and far beyond the
    // scope of the original project
};

function playRound(userChoice) {
    let computerChoice = getComputerChoice()
    let outcome = ""


    if (userScore > 4) {
        console.log(`Win condition met, userScore = ${userScore}, computerScore = ${computerScore}`) // Win condition met, Here's why...
        button.forEach(elem => {elem.disabled = true}) // turn the buttons off
        outcome = "This was a triumph!"
        //document.getElementById(ytVideo).src = 'https://www.youtube.com/embed/Y6ljFaKRTrI'
        changeVideo('https://www.youtube.com/embed/Y6ljFaKRTrI')
    } else if (computerScore > 4) {
        console.log(`Win condition met, userScore = ${userScore}, computerScore = ${computerScore}`) // Win condition met, Here's why...
        button.forEach(elem => {elem.disabled = true}) // turn the buttons off
        outcome = "You lose! Good day sir!"
        //document.getElementById('ytVideo').src = 'https://www.youtube.com/embed/M5QGkOGZubQ'
        changeVideo('https://www.youtube.com/embed/M5QGkOGZubQ')
    } else if (userChoice == computerChoice) {  // Draw
        outcome = `${userChoice} vs ${computerChoice}, it's a draw!`
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)
    } else if (userChoice == "rock" && computerChoice == "paper") { // rock vs paper
        outcome = `${userChoice} vs ${computerChoice},  you lose!`
        computerScore += 1 
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)
    } else if (userChoice == "rock" && computerChoice == "scissors") { // rock vs scissors
        outcome = `${userChoice} vs ${computerChoice},  you win!`
        userScore += 1   
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)     
    } else if (userChoice == "paper" && computerChoice == "rock") { // paper vs rock
        outcome = `${userChoice} vs ${computerChoice},  you win!`
        userScore += 1 
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)
    } else if (userChoice == "paper" && computerChoice == "scissors") { //paper vs scissors
        outcome = `${userChoice} vs ${computerChoice},  you lose!`
        computerScore += 1 
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)
    } else if (userChoice == "scissors" && computerChoice == "rock") { // scissors vs rock
        outcome = `${userChoice} vs ${computerChoice},  you lose!`
        computerScore += 1 
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore) 
    } else if (userChoice == "scissors" && computerChoice == "paper") { // scissors vs paper
        outcome = `${userChoice} vs ${computerChoice},  you win!`
        userScore += 1 
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)
    } else if (userChoice == "shotgun") {
        outcome = `User chose Shotgun, which is cheating.`
        userScore += 5
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)
    }

    document.getElementById("outcome").innerHTML = outcome
    document.getElementById("userScore").innerHTML = userScore
    document.getElementById("computerScore").innerHTML = computerScore

    
    
}  // Closing tag of playRound(userChoice)

