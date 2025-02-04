const prompt = require("prompt");

prompt.start();

prompt.get(["userSelection"], function (err, result) {
    if (err) {
        console.log("Error in getting input.");
        return;
    }

    const userSelection = result.userSelection.toUpperCase();
    const validChoices = ["ROCK", "PAPER", "SCISSORS"];

    if (!validChoices.includes(userSelection)) {
        console.log("Invalid choice. Please run the program again.");
        return;
    }

    function getComputerChoice() {
        const randomNumber = Math.random();
        if (randomNumber < 0.34) return "PAPER";
        else if (randomNumber < 0.68) return "SCISSORS";
        else return "ROCK";
    }

    function determineWinner(userSelection, computerSelection) {
        if (userSelection === computerSelection) return "It's a tie";
        if (
            (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
            (userSelection === "PAPER" && computerSelection === "ROCK") ||
            (userSelection === "SCISSORS" && computerSelection === "PAPER")
        ) {
            return "User Wins";
        }
        return "Computer Wins";
    }

    const computerSelection = getComputerChoice();
    console.log(`User chose: ${userSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(determineWinner(userSelection, computerSelection));
});




