let userScore = 0
let computerScore = 0


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(userChoice) {
    let computerChoice = getComputerChoice()
    let outcome = ""

    if (userChoice == computerChoice) {  // Draw
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
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        outcome = `${userChoice} vs ${computerChoice},  you win!`
        userScore += 1 
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        outcome = `${userChoice} vs ${computerChoice},  you lose!`
        computerScore += 1 
        console.log(outcome)
        console.log(userScore)
        console.log(computerScore)
    }

    document.getElementById("outcome").innerHTML = outcome
    document.getElementById("userScore").innerHTML = userScore
    document.getElementById("computerScore").innerHTML = computerScore
    
}  // Closing tag of playRound(userChoice)

if (userScore < 5 && computerScore < 5) {
    const buttons = document.querySelectorAll("input")
    // Listen to each button, and when clicked, that button runs playRound with that button as the argument
    buttons.forEach(button => button.addEventListener('click', function(){
        playRound(button.value)
    }))
} else if (userScore == 5) {
    button.forEach(elem => {elem.disabled = true})
    document.getElementById("outcome").innerHTML = "You Win!"
    console.log("win condition met")
} else if (computerScore == 5) {
    button.forEach(elem => {elem.disabled = true})
    document.getElementById("outcome").innerHTML = "Better luck next time!"
    console.log("win condition met")
}


