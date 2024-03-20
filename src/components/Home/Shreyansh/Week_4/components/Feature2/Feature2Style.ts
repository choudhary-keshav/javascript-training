import { styled } from 'styled-components';

export const Feature2Wrapper = styled.div`
  .calculatorContainer {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
  }
  h1 {
    display: flex;
    justify-content: center;
  }
  .calculatorContainer input[type='text'] {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .calculatorContainer div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .calculatorContainer button {
    width: 23%;
    padding: 10px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 2px;
  }
  .calculatorContainer button:hover {
    background-color: #0056b3;
  }
`;
