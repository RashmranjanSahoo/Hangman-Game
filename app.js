const keyboard = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModel=document.querySelector(".game-model");
const wordDisplay = document.querySelector(".word-display");
const GuessesText = document.querySelector(".guesses-text b");
const PlayAgain = document.querySelector(".play-again");
const winsText = document.querySelector(".wins-text b");


let currentWord;
let wordGuessedCount;
let correctLetter;
const maxGuess=6;
// local storage for wins
let wins = Number(localStorage.getItem("wins")) || 0;
winsText.innerText = wins;

// for dynamic keyboard keys
for(let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);
    button.addEventListener('click',e=>{
        initGame(e.target, String.fromCharCode(i))
    });
}

const resetGame=()=>{
    // reset all elements and update the ui
    correctLetter=[];
    wordGuessedCount=0;
    GuessesText.innerText = maxGuess - wordGuessedCount;
    hangmanImage.src=`images/hangman-${wordGuessedCount}.svg`;
    keyboard.querySelectorAll("button").forEach(btn=> btn.disabled=false)
    wordDisplay.innerHTML=currentWord.split("").map(()=> `<li class="letter"></li>`).join("");
    gameModel.classList.remove("show")
}

const getRandomWord=()=>{
    const {word,hint}=wordList[Math.floor(Math.random()*wordList.length)];
    document.querySelector(".hint-text b").innerText=hint;
    currentWord=word;
    resetGame();
    console.log(word);
    
    
}

const gameOver=(isVictory)=>{
    // local wins
    if(isVictory){
        wins++;
        localStorage.setItem("wins", wins);
        winsText.innerText = wins;
    }
    //after 300ms shows the result on the screen
    setTimeout(()=>{
        const modalText=isVictory ? ` you found The word:` : `The correct word was:`;
        gameModel.querySelector("img").src=`images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModel.querySelector("h4").innerHTML=`${isVictory ? 'Congratulations!' : 'Game Over!'}`;
        gameModel.querySelector("p").innerHTML=`${modalText}<b> ${currentWord}</b>`;
        gameModel.classList.add("show")
    },300);
}
const initGame = (button, clickedLetter)=>{
    //check if letter exist for the current
    button.disabled=true;
    if(currentWord.includes(clickedLetter)){
        //show all correct letters
        [...currentWord].forEach((Letter,index)=>{
            if(Letter === clickedLetter){
                correctLetter.push(Letter);
                const letters = wordDisplay.querySelectorAll("li");
                letters[index].innerText= Letter;
                letters[index].classList.add('guessed');

            }
        })
    }else {
        // add next image for any wrong word
        wordGuessedCount++;
        hangmanImage.src=`images/hangman-${wordGuessedCount}.svg`
    }
    GuessesText.innerText=maxGuess - wordGuessedCount;
    if(wordGuessedCount === maxGuess)return gameOver(false);
    if(correctLetter.length === currentWord.length) return gameOver(true);
}
getRandomWord();
PlayAgain.addEventListener("click",getRandomWord);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && gameModel.classList.contains("show")) {
        getRandomWord();
    }
});