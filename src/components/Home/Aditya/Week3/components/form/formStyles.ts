import styled from 'styled-components';

export const FormWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #ffe4c4;
  border-radius: 20px;
  box-shadow: 5px 5px 0px #000000;
  #container {
    margin: 30px;
  }
  input {
    width: -webkit-fill-available;
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
  }
  label {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  #heading {
    text-transform: uppercase;
    font-family: fantasy;
    font-size: xx-large;
    font-weight: lighter;
  }
  #submit {
    width: fit-content;
    padding: 10px;
    margin-top: 10px;
    font-weight: bold;
    border: 2px solid #000000;
    border-radius: 4px;
    color: #ffffff;
    background-color: #483d8b;
    &:hover {
      border-color: #483d8b;
      color: #483d8b;
      background-color: #ffffff;
      &:active {
        background-color: #008000;
        color: #ffffff;
      }
    }
  }
  @media (max-width: 600px) {
    width: 280px;
  }
`;
