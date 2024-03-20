import React, { useState } from 'react';
import { TicTacToeWrapper } from './styles';

const TicTacToe = () => {
  const [ticTacToeBoard, setTicTacToeBoard] = useState<string[][]>([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]);
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

  const checkWinner = (board: (string)[][], symbol: string): boolean => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol) {
        return true;
      }
    }

    if (
      (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
      (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
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

  return (
    <TicTacToeWrapper>
      <h1>Tic Tac Toe</h1>
      <p>{renderMsg()}</p>
      <table>
        <tbody>
          {ticTacToeBoard.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td onClick={() => handleMove(rowIndex, colIndex)} key={colIndex}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TicTacToeWrapper>
  );
};

export default TicTacToe;
