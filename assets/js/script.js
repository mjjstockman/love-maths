// Wait for the DOM to finish loading before adding the code
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                alert("Submit clicked");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`Game type is ${gameType}`);
            }
        })
    }
})

// Get the button elements and add event listeners to them

function runGame() {

}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}