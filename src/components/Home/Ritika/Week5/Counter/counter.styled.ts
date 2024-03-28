import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  height: 100vh;

  .counterButton {
    background-color: #4caf50;
    color: #ffffff;
    font-size: 1.5vw;
    padding: 1% 2%;
    border: none;
    border-radius: 5%;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin: 2%;
  }

  .counterButton:hover {
    background-color: #388e3c;
  }

  .counterValue {
    font-size: 2vw;
    font-weight: bold;
  }

  .incrementByValueInput {
    padding: 1%;
    border: 1px solid #ccc;
    border-radius: 5%;
    font-size: 1.5vw;
    margin-right: 2%;
    border: none;
    outline: none;
    width: 150px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .incrementByValueButton {
    background-color: #2196f3;
    color: #ffffff;
    font-size: 1.5vw;
    padding: 1% 2%;
    border: none;
    border-radius: 5%;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .incrementByValueButton:hover {
    background-color: #1976d2;
  }

  .resetButton {
    background-color: #f44336;
    color: #ffffff;
    font-size: 1.5vw;
    padding: 1% 2%;
    border: none;
    border-radius: 5%;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin: 1%;
  }

  .resetButton:hover {
    background-color: #d32f2f;
  }
`;
