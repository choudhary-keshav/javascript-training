import styled from 'styled-components';

export const CounterWrapper = styled.div`
  .App {
    text-align: center;
  }
  .heading {
    padding-top: 70px;
    font-size: 40px;
    font-family: fantasy;
    word-spacing: 5px;
    text-transform: uppercase;
  }
  .counter {
    margin: auto;
    width: 200px;
    background-color: #a0a0a0;
    border-radius: 5px;
    padding: 5px;
    button {
      width: 30%;
      padding: 10px 0px;
      background-color: transparent;
      font-size: 25px;
      border: none;
    }
    #countValue {
      background-color: #ffffff;
      border-radius: 5px;
      width: 40%;
      font-size: 20px;
      font-family: fantasy;
      padding: 20px 0px;
      display: inline-block;
    }
  }
`;
