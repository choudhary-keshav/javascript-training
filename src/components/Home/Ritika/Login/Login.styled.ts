import styled from 'styled-components';

export const LoginWrapper = styled.div`
  background-color: #add8e6;
  padding: 50px;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
  margin-top: 10%;
  box-shadow: #00000010 0px 5px 15px;
  border-radius: 30px;
  .labelField {
    padding: 10px;
    margin: 8px;
    font-size: 25px;
    font-weight: 800;
  }
  .inputField {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 16px;
  }
  .submitButton {
    width: 20%;
    margin: 22px auto auto auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background-color: #3498db;
    color: #ffffff;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #2980b9;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 60%;
    .submitButton {
      width: 50%;
      margin: auto;
    }
  }
  @media screen and (max-width: 700px) {
    width: 70%;
    .submitButton {
      width: 80%;
    }
  }
  @media screen and (max-width: 400px) {
    .submitButton {
      width: 80%;
      margin: auto;
    }
  }
`;
