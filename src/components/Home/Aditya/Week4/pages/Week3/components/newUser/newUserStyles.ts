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
    border-color: #000;
    color: #000;
    &:hover {
      background: #fff;
      color: #32cd32;
      border-color: #32cd32;
    }
    &:active {
      background-color: #008000;
      color: #fff;
      border-color: transparent;
    }
    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background-color: #808080;
      color: #fff;
      border-color: #808080;
      cursor: not-allowed;
    }
  }
  p {
    margin: 0% auto;
  }
`;
