import styled from 'styled-components';

export const EditModalWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .editModalWrapper {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #bdbdbde6;
  }

  .editModalContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 5%;
    border-radius: 20px;
  }

  .dueDate {
    width: 200px;
    cursor: pointer;
    border: none;
    outline: none;
    background: #edeef0;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }

  .taskInputBox {
    width: 200px;
    border: none;
    outline: none;
    background-color: #edeef0;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  .unclickable {
    cursor: not-allowed;
    display: inline-block;
  }

  .unclickable:active {
    transform: none;
  }

  .cross {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    padding: 5px;
  }

  .cross:hover {
    background-color: #b32b13;
    color: #ffffff;
    border-radius: 50%;
  }
`;

export const Button = styled.button`
  background-color: #ff5945;
  color: #fff;
  font-size: 16px;
  padding: 4%;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 20px;

  &:hover {
    background-color: #b32b13;
  }

  &:active {
    transform: scale(0.9);
  }
`;
