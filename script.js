let numSquares = 9; 
let colors = [];
let header = document.querySelector("header")
let squares = document.querySelectorAll(".square");
let pickedColor;
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode")

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
};

function setUpModeButtons(){
    // This functions controls the easy, medium, and hard buttons
    for (var i = 0;i < modeButtons.length;i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected")
            switch(this.textContent){
                case("Easy"):
                numSquares = 3;
                break;
                case("Medium"):
                numSquares = 6;
                break;
                case("Hard"):
                numSquares = 9;
                break;
            }
            reset();
        });
    }
}

function setUpSquares(){
    /*
    This function controls the colors for each box, 
    giving them each a different color, an event listener to check
    if user guessed correctly or not
    */
    for(var i = 0; i < squares.length; i++){
        // Add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
        // Add click listeners to squares
        squares[i].addEventListener("click", function(){
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                header.style.backgroundColor = clickedColor
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    };
}
function reset(){
    // This function controls the reset and Paly again button located on the left hand side of the mode buttons
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0;i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";

        }
        squares[i].style.background = colors[i];
    }
    header.style.backgroundColor = "steelblue"
}

function changeColors(color) {
    // Loop through all squares
    for(i = 0; i < squares.length; i++){
        // Change each color to match correct answer
        squares[i].style.backgroundColor = color
    }
};

function pickColor(){
     var randomColor = Math.floor(Math.random() * colors.length);
     return colors[randomColor];
};

function generateRandomColors(num) {
    // Make an array
    var arr = [];
    // Repeat num number of times
    for (var i = 0; i < num; i++) {
        // Add num random color and push to array
        arr.push(randomColor())
    }
    // Return array
    return arr;
};

function randomColor(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

};

resetButton.addEventListener("click", function(){
    reset();
});


