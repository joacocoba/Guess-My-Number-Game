'use strict';
//Declaración de las variables principales
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;


function mostrarMensaje(message) {
    return document.querySelector(".message").textContent = `${message}`;
}

document.querySelector(".check").addEventListener("click", function(){
    let guess = Number(document.querySelector(".guess").value);
    
    //Comprobar si se ingreso un número
    if(!guess){
        mostrarMensaje("Didn't receive a number ⛔️");
    }

    //Comprobar si acertó el numero secreto.
    else if(guess === secretNumber){
        mostrarMensaje("Winner! You guessed the number 🎉");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").style.width = "30rem";
        document.querySelector("body").style.backgroundColor = "#60b347";
        
        if(score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    //Comprobar si NO se acertó
    else if(guess !== secretNumber) {
    if(score > 1) {
        score--;
        document.querySelector(".score").textContent = score;
        mostrarMensaje(guess > secretNumber ? "Too high 📈" : "Too low 📉");
    } else {
        mostrarMensaje("You've lost the game ❌")
        document.querySelector(".score").textContent = 0;
    }
    } 
})

//Resetear el juego
document.querySelector(".again").addEventListener("click", function(){
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector(".score").textContent = score;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
})