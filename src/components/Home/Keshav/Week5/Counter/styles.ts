import styled from 'styled-components';

export const CounterWrapper = styled.div`
  .counterHeading {
    padding: 10px;
    background-color: #000000;
    color: #fff;
  }
  .btn {
    padding: 15px;
    background-color: #000000;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #000000;
      transition-duration: 1s;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
