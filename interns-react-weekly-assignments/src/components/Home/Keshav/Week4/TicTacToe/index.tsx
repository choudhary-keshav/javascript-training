import React, { useState } from 'react';
import { TicTacToeWrapper } from './styles';

const TicTacToe = () => {
  const initialBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  const [ticTacToeBoard, setTicTacToeBoard] = useState<string[][]>(initialBoard);

  const [player, setPlayer] = useState<number>(1);
  const [winner, setWinner] = useState<number | null>(null);

  const handleMove = (row: number, column: number) => {
    if (ticTacToeBoard[row][column] !== ' ' || winner) return;

    const newBoard = [...ticTacToeBoard];
    newBoard[row][column] = player === 1 ? 'X' : 'O';

    if (checkWinner(newBoard, player === 1 ? 'X' : 'O')) {
      setWinner(player);
      return;
    }

    setPlayer(player === 1 ? 2 : 1);
    setTicTacToeBoard(newBoard);
  };

  const checkWinner = (board: string[][], value: string): boolean => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === value && board[i][1] === value && board[i][2] === value) {
        return true;
      }
      if (board[0][i] === value && board[1][i] === value && board[2][i] === value) {
        return true;
      }
    }

    if (
      (board[0][0] === value && board[1][1] === value && board[2][2] === value) ||
      (board[0][2] === value && board[1][1] === value && board[2][0] === value)
    ) {
      return true;
    }
    return false;
  };

  const renderMsg = (): string => {
    if (winner) {
      return `Player ${winner} wins!`;
    } else {
      return `Next Move: Player ${player}`;
    }
  };

  const handleReset = () => {
    setTicTacToeBoard(initialBoard);
    setWinner(null);
    setPlayer(1);
  };

  return (
    <TicTacToeWrapper>
      <h1>Tic Tac Toe</h1>
      <p>{renderMsg()}</p>
      <table>
        <tbody>
          {ticTacToeBoard.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td className={winner || cell !== ' ' ? 'disable' : ''} onClick={() => handleMove(rowIndex, colIndex)} key={colIndex}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleReset} className='resetButton'>
        Reset
      </button>
    </TicTacToeWrapper>
  );
};

export default TicTacToe;
