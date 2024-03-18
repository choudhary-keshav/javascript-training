import styled from "styled-components";

export const FormDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: bisque;
  border-radius: 20px;
  box-shadow: 5px 5px 0px black;

  #container {
    margin: 30px;
  }

  input {
    width: -webkit-fill-available;
    text-align: center;
    font-size: 15px;
  }

  #heading {
    text-transform: uppercase;
    font-family: fantasy;
    font-size: xxx-large;
  }

  #submit {
    width: fit-content;
    padding: 10px;
    margin-top: 10px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 4px;
    color: white;
    background-color: darkslateblue;
    &:hover {
      border-color: darkslateblue;
      color: darkslateblue;
      background-color: white;
      &:active {
        background-color: green;
        color:white;
      }
    }
  }

  @media (max-width: 600px) {
      width: 280px;
  }
`;
