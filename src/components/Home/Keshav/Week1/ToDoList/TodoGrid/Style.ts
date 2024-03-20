import styled from 'styled-components';

export const ToDoGridWrapper = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
  }
  th,
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    width: max-content;
    text-align: center;
  }
  td {
    word-break: break-all;
  }
  td img {
    width: 30px;
    cursor: pointer;
  }
  .taskDescription {
    width: 50%;
  }
  td div img:hover {
    width: 28px;
  }
  td div img:active {
    transform: scale(0.8);
  }
`;
