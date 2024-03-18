import styled from 'styled-components';

export const CounterDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: beige;
  padding: 30px;
  border-radius: 10px;

  .flex {
    display: flex;
  }

  .buttonDiv {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    justify-content: center; 
    align-items: center;
    button {
      width: 100%;
      margin: 2px 0px;
      padding: 4px;
      font-size: 15px;
      border: 2px solid grey;
      border-radius: 5px;
      &:hover {
        border-color: black;
        &:active {
          background-color: darkslategrey;
          color: white;
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
