'use client'
import "./rockpaper.css";
import { useState } from "react";

export default function RockPaperGame() {
const [userScore, setUserScore] = useState(0);
const [computerScore, setComputerScore] = useState(0);
const [message, setMessage] = useState("Let the game begin!");

const getComputerChoice = () => {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const convertToWord = letter => {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  return "Scissors";
};

const handleClick = (e) => {
  let choice = e.target.id;
  const botChoice = getComputerChoice();
  switch (choice + botChoice) {
    //Winning Combinations
    case 'rs':
    case 'pr':
    case 'sp':
      setUserScore(userScore + 1);
      setMessage(`${convertToWord(choice)} beats ${convertToWord(botChoice)}. You win! 🔥`);
      e.target.classList.add("green-glow");
      setTimeout(() => e.target.classList.remove("green-glow"), 1000);
      break;
    //Losing Combinations
    case 'sr':
    case 'rp':
    case 'ps':
      setComputerScore(computerScore + 1);
      setMessage(`${convertToWord(choice)} loses to ${convertToWord(botChoice)}. You lose! 💩`);
      e.target.classList.add("red-glow");
      setTimeout(() => e.target.classList.remove("red-glow"), 1000);
      break;
    //Draw Combinations
    case 'ss':
    case 'pp':
    case 'rr':
      setMessage(`${convertToWord(choice)} and ${convertToWord(botChoice)}: It's a draw! 🤷`);
      e.target.classList.add("yellow-glow");
      setTimeout(() => e.target.classList.remove("yellow-glow"), 1000);
  };
};

const handleReset = () => {
  setUserScore(0);
  setComputerScore(0);
  setMessage("Let the game begin!");
}

  return (
    <div id="rockpapergame">

      <header>
        <h1>Rock Paper Scissors</h1>
      </header>

      <div className="scoreboard">
        <div className="badge" id="user-label">
          user
        </div>
        <div className="badge" id="bot-label">
          bot
        </div>
        <span id="user-score">{userScore}</span>:<span id="computer-score">{computerScore}</span>
      </div>

      <div className="result">
        <p>{message}</p>
      </div>

      <div className="choices">
        <div className="choice" >
          <img src="/rock-paper-imgs/rock.png" value="rock" id="r" onClick={handleClick}/>
        </div>
        <div className="choice">
          <img src="/rock-paper-imgs/paper.png" value="paper" id="p" onClick={handleClick} />
        </div>
        <div className="choice">
          <img src="/rock-paper-imgs/scissors.png" value="scissors" id="s" onClick={handleClick}/>
        </div>
      </div>

      <p id="action-message">Make your move.</p>

      <div className="reset">
        <button id="reset-btn" onClick={handleReset}>Reset</button>
      </div>

    </div>
  );
}
