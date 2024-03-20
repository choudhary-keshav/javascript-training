import styled from 'styled-components';

export const ShowFriendStatusWrapper = styled.div`
  flex: 1;
  padding: 2% 5%;

  .statusButton {
    border: none;
    outline: none;
    background-color: #ff5945;
    color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
    margin-left: 4%;
  }

  .statusButton:active {
    transform: scale(0.8);
  }

  div p {
    border: 1px solid #000000;
    background-color: #000000;
    color: #ffffff;
    padding: 10px;
    font-size: 20px;
    text-align: left;
    padding-left: 10%;
  }

  input {
    width: 70%;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: none;
  }

  .resultMessage {
    font-style: italic;
    font-weight: 500;
  }

  .Away {
    background-color: #ffa500;
  }

  .Leave {
    background-color: #6495ed;
  }

  .Disturb {
    background-color: #ff0000;
  }

  .Offline {
    background-color: #808080;
  }

  .Available {
    background-color: #32cd32;
  }
`;
