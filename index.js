var j = 0;
var randColorList = [];
var colors = ["green", "red", "yellow", "blue"];


document.addEventListener("keydown", keyboardInput);
document.querySelector("input").addEventListener("click",keyboardInput);
for (var i = 0; i <= 3; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        if ((this.classList[0] === randColorList[j]) || (j === randColorList.length)) {
            if (this.classList[0] === randColorList[j]) {
                this.classList.add("pressed");
                var clicked = new Audio("sounds/" + this.classList[0] + ".mp3");
                clicked.play();
                var but = this;
                setTimeout(function () { but.classList.remove("pressed") }, 200);
                j++;
            }
            if (j === randColorList.length && j != 0) {
                setTimeout(addNewColor, 500);
            }
        }
        else {
            document.querySelector("body").classList.add("game-over");
            var gameOver = new Audio("sounds/wrong.mp3");
            gameOver.play();
            randColorList = [];
            document.querySelector("h1").innerHTML = "Game Over, Press Any Key to Restart";
            document.addEventListener("keydown", keyboardInput);
            document.querySelector("input").addEventListener("click",keyboardInput);
            document.querySelector("input").classList.remove("visiblity");
        }
    });
}


function addNewColor() {
    j = 0;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = colors[randomNumber];
    randColorList.push(randomColor);
    var button = document.querySelector("." + randomColor).classList;
    button.add("pressed");
    setTimeout(function () { button.remove("pressed") }, 200);
    document.querySelector("h1").innerHTML = "LEVEL " + randColorList.length;
    var location = "sounds/" + randomColor + ".mp3"
    var audio = new Audio(location);
    audio.play();
    console.log(randColorList);
}

function keyboardInput() {
    document.querySelector("body").classList.remove("game-over");
    document.removeEventListener("keydown",keyboardInput);
    document.querySelector("input").classList.add("visiblity");
    document.querySelector("input").removeEventListener("click",keyboardInput);
    addNewColor();
}