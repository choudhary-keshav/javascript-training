import styled from 'styled-components';

export const HomeWrapper = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;

  .mainHeading {
    text-align: center;
    margin: 20px;
    font-size: 24px;
    color: #333;
  }

  .internButtonsContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 15px;
  }

  .internButton {
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background-color: #3498db;
    color: #fff;
    transition: background-color 0.3s ease;
  }

  .internButton:hover {
    background-color: #2980b9;
  }

  .active {
    background-color: #2980b9;
  }
`;
