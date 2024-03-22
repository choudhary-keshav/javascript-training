import styled from 'styled-components';

export const NewUserWrapper = styled.div`
  .wide {
    width: 75%;
    margin: 5px 2px;
    @media (max-width: 600px) {
      width: 70%;
    }
  }
  #submit {
    padding: 10px;
    font-size: 17px;
    margin-top: 10px;
    background: #32cd32;
    font-weight: bold;
    border-radius: 7px;
    border-color: #000000;
    color: #000000;
    &:hover {
      background: #ffffff;
      color: #32cd32;
      border-color: #32cd32;
    }
    &:active {
      background-color: #008000;
      color: #ffffff;
      border-color: transparent;
    }
    &:disabled {
      background-color: #808080;
      color: #ffffff;
      border-color: #808080;
      cursor: not-allowed;
      &:active {
        background-color: #808080;
        color: #ffffff;
        border-color: #808080;
      }
      &:hover {
        background-color: #808080;
        color: #ffffff;
        border-color: #808080;
      }
    }
  }
  p {
    margin: 0% auto;
  }
`;
