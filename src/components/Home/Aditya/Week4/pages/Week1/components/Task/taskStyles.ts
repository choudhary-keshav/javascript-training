import styled from 'styled-components';
import { black, grey, primary, secondary, white } from '../../colorExports';

export const TaskDiv = styled.div`
  display: flex;
  width: 60%;
  margin: 5px auto;
  border-radius: 10px;
  background: ${secondary};
  padding: 0px 10px;
  input {
    margin: 5px;
    background: transparent;
    border: none;
    padding: 2px;
    font-size: 16px;
    color: ${primary};
    font-weight: bold;
    &:enabled {
      background: ${white};
      border: 2px solid ${black};
      border-radius: 7px;
    }
  }
  img {
    cursor: pointer;
    &:hover {
      background: ${grey};
      border-radius: 10px;
    }
  }
  .taskIsCompleted {
    cursor: pointer;
  }
  .taskValue {
    width: 60%;
  }
  .taskDueDate {
    width: 200px;
  }
  .taskCompleted {
    text-decoration: line-through;
  }
  @media (max-width: 750px) {
    width: 70%;
    .taskValue {
      width: 200px;
    }
  }
  @media (max-width: 600px) {
    width: 90%;
    .taskValue {
      width: 260px;
    }
  }
  @media (max-width: 460px) {
    input {
      font-size: 13px;
    }
    .taskValue {
      width: 40%;
    }
  }
`;
