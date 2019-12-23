let colors = generateRandomColors(6);
let header = document.querySelector("h1")
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset")
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard")

colorDisplay.textContent = pickedColor;

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
    // Generate new random colors
    colors = generateRandomColors(6)
    // Pick random color from array
    pickedColor = pickColor();
    // Change color display to match picked Color
    colorDisplay.textContent = pickedColor;
    // Change color of array
    for(i = 0;i < squares.length; i++){
        squares[i].style.background = colors[i]
    }
    header.style.backgroundColor = "#232323"
});

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected")
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i = 0;i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }
});
hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"
    }
})
