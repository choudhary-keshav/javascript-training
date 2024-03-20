import styled from 'styled-components';

export const CounterWrapper = styled.div`
  background-color: #f0f8ff;
  height: 400px;
  width: 70%;
  border: 2px solid #000000;
  margin: 12px auto;

  .countValueToChange {
    font-size: 50px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .incrementButton,
  .decrementButton {
    padding: 25px;
    margin: 7px;
    border: none;
    background-color: #00008b;
    color: #ffffff;
    border-radius: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
  }
`;
