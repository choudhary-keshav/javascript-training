import styled from 'styled-components';

export const TicTacToeWrapper = styled.div`
  padding: 30px;
  background-color: #f0f0f0;

  table {
    margin: 0 auto;
  }

  tr {
    margin: 10px;
  }
  td {
    border: 1px solid black;
    width: 100px;
    height: 100px;
    font-size: 60px;
    cursor: pointer;
  }

  .resetButton {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background-color: #ff5945;
    color: #fff;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    padding: 15px;
  }

  .resetButton:hover {
    background-color: #b32b13;
  }

  .disable:hover {
    cursor: not-allowed;
  }
`;
