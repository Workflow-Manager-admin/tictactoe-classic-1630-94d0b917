import React, { useState } from 'react';
import './TicTacToe.css';

// PUBLIC_INTERFACE
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  /**
   * Calculates the winner by checking all possible winning combinations
   * @param {Array} squares - Current state of the game board
   * @returns {string|null} - Returns 'X', 'O', or null
   */
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  /**
   * Handles a square click event
   * @param {number} index - Index of the clicked square
   */
  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  /**
   * Restarts the game by resetting the board and turn state
   */
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);
  const status = winner 
    ? `Winner: ${winner}` 
    : isDraw 
    ? "Game is a draw!" 
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="tictactoe">
      <h1 className="game-title">Tic Tac Toe Classic</h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <button className="restart-btn" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default TicTacToe;
