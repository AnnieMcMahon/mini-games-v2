"use client";
import "./tictactoe.css";
import { useState } from "react";
import Board from "./Board";

export default function TicTacToeGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div id="tictactoe">
      <h1>Tic-Tac-Toe</h1>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <button className="reset" onClick={resetGame}>
          Start Over
        </button>
      </div>
    </div>
  );
}
