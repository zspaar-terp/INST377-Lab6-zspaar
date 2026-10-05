function playGame() {
    var choices = document.getElementsByName("userChoice");
    var userChoice = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            userChoice = choices[i].value;
        }
    }

    if (userChoice == "") {
        alert("Please choose Rock, Paper, or Scissors. Don't you worry, it can't read your mind... yet.");
        return;
    }

    var computerNumber = Math.floor(Math.random() * 4);
    var computerChoice = "";

    if (computerNumber == 0) {
        computerChoice = "Rock";
    }
    if (computerNumber == 1) {
        computerChoice = "Paper";
    }
    if (computerNumber == 2) {
        computerChoice = "Scissors";
    }
    if (computerNumber == 3) {
        computerChoice = "Spock";
    }

    document.getElementById("user-choice").innerHTML = userChoice;
    document.getElementById("computer-choice").innerHTML = computerChoice;

    if (computerChoice == "Spock") {
        document.body.style.background = "red";
        alert("You Lose");
    }
    else if (userChoice == computerChoice) {
        document.body.style.background = "blue";
        alert("Tie");
    }
    else if (userChoice == "Rock" && computerChoice == "Scissors") {
        document.body.style.background = "green";
        alert("You Win");
    }
    else if (userChoice == "Paper" && computerChoice == "Rock") {
        document.body.style.background = "green";
        alert("You Win");
    }
    else if (userChoice == "Scissors" && computerChoice == "Paper") {
        document.body.style.background = "green";
        alert("You Win");
    }
    else {
        document.body.style.background = "red";
        alert("You Lose");
    }
}

function validateContactForm() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        alert("Please enter your name, twin.");
        return false;
    }

    if (date == "") {
        alert("Please choose a date. Are you taking me to coffee?");
        return false;
    }

    if (message == "") {
        alert("Please enter a message. The giant textbox is not decorative.");
        return false;
    }

    var allowedCharacters = /^[A-Za-z0-9\s]+$/;

    if (allowedCharacters.test(message) == false) {
        alert("No special characters allowed. Apparently punctuation is too powerful for this rn.");
        return false;
    }

    window.location.href = "success.html";
    return false;
}
