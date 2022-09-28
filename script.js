function playGame() {
        let userScore = 0                                                   //Zeroes scoreboard
        let computerScore = 0                                               //Zeroes scoreboard
        let userName = prompt("Please enter your name")                     //User enters name
        if (userName == null || userName == "") {                           //Defaults to "Player" if user clicks cancel or leaves blank (respectively)
                userName = "Player"
        }

        // Defining 1 round of Rock Paper Scissors
        function playRound() {

                // Computer is presented with options, RNG picks one
                let choices = ["rock", "paper", "scissors"]                         //Gives options to computer
                let computerChoice = choices[Math.floor(Math.random() * 3 )]        //Computer choses at random
                //let userChoice = choices[Math.floor(Math.random() * 3 )]            //For testing purposes userChoice is RNG
                let userChoice = prompt("Rock, Paper, Scissors? \nLeave blank or click 'cancel' to forfeit.")//For actual implementation

                // Outcomes 
                let winMessage = `${userName} chose ${userChoice}, which beat the computer's ${computerChoice}`
                let drawMessage = `${userName} and Computer both chose ${userChoice}... It's a draw.`
                let loseMessage = `${userName} chose ${userChoice}, which lost to the Computer's ${computerChoice}`
                let cheatMessage = `${userName} chose ${userChoice}, which is cheating.`
        
        // Compares Computer Choice to User Choice, decides winner of round        
        if (userChoice == computerChoice) {  //DRAW User choice matches computer choice
                console.log(drawMessage)
        } else if (userChoice == "rock" && computerChoice == "paper") {  // LOSE user's rock lost to Computer's paper
                console.log(loseMessage)
                computerScore += 1
        } else if (userChoice == "rock" && computerChoice == "scissors") {  // WIN user's rock beats Computer's scissors
                console.log(winMessage)
                userScore += 1
        } else if (userChoice == "paper" && computerChoice == "rock") { // WIN user's paper beats Computer's rock
                console.log(winMessage)
                userScore += 1
        } else if (userChoice == "paper" && computerChoice == "scissors") { // LOSE User's paper loses to Computer's rock
                console.log(loseMessage)
                computerScore += 1
        } else if (userChoice == "scissors" && computerChoice == "rock") { // LOSE User's scissors lose to Computer's rock
                console.log(loseMessage)
                computerScore += 1
        } else if (userChoice == "scissors" && computerChoice == "paper") { // WIN User's scissors beat Computer's paper
                console.log(winMessage)
                userScore += 1
        } else if (userChoice == "shotgun") { //sv_cheats 1, godmode 1
                console.log(cheatMessage)
                userScore += 5
        } else if (userChoice == null || userChoice == "") { // Forfeits the game if the user clicks cancel or refuses to enter a choice
                alert(`${userName} forfeit the match, Computer wins.`)
                console.log(`${userName} chose to forfeit.`)
                computerScore += 5
        } else  {console.log(`${userName} entered an invalid choice - ${userChoice} \nPlease enter one of the following - ${choices}\nNote: input is not case-sensitive\nScoreboard remains unchanged.`)
                alert(`Please check spelling\nYou entered "${userChoice}"\n\n Did you mean Rock, Paper, Scissors`)
                playRound // Restarts the round
        
        }

        // Displays scores
        console.log(`${userName}: ${userScore}`)
        console.log(`Computer: ${computerScore}`)
        }// Closing tag of playRound

        while (userScore < 5 && computerScore < 5) {
                playRound()
        }
        
        if (userScore >= 5) { //selecting shotgun awards 5 points, hence >= greater than or equal to win criteria
                console.log("This was a triumph \nI'm making a note here\nHUGE SUCCESS ")

        } else if (computerScore >= 5) { //User chosing to forfeit awards the computer 5 points at any stage of the game.
                console.log("It's all there, black and white,\nclear as crystal.\nYou get nothing.\nYou lose.\nGood day, sir!")
        }
} // closing tag of playGame

// This calls the function playGame() which runs all of the above code.
playGame()

