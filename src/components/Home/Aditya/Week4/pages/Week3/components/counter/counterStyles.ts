import styled from 'styled-components';

export const CounterWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f5f5dc;
  padding: 30px;
  border-radius: 10px;
  .gridWrapper {
    display: flex;
  }
  .buttonDiv {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    button {
      width: 100%;
      margin: 2px 0px;
      padding: 4px;
      font-size: 15px;
      border: 2px solid #808080;
      border-radius: 5px;
      &:hover {
        border-color: #000000;
        &:active {
          background-color: #2f4f4f;
          color: #ffffff;
        }
      }
      &:disabled {
        cursor: not-allowed;
        &:hover {
          border-color: #808080;
        }
        &:active {
          background-color: transparent;
          color: #1010104d;
        }
      }
    }
  }
  #countValue {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 5;
  }
  #countValue {
    width: 50px;
  }
`;
