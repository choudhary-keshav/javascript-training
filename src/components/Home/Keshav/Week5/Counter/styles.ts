import styled from 'styled-components';

export const CounterWrapper = styled.div`
  .counterHeading {
    padding: 10px;
    background-color: #000000;
    color: #ffffff;
  }
  .btn {
    padding: 15px;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      color: #000000;
      transition-duration: 1s;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
