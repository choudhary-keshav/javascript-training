import styled from 'styled-components';
import { grey, primary, secondary, tertiary, warning, white } from '../../colorExports';

export const NewTask = styled.div`
  position: fixed;
  top: 87%;
  width: 100%;
  text-align: center;
  z-index: 5;
  button {
    font-size: 15px;
    border-radius: 10px;
    border: 2px solid ${tertiary};
    color: ${primary};
    font-weight: bold;
    margin-left: 7px;
    &:hover {
      background: ${tertiary};
      color: ${white};
      border-color: ${white};
      cursor: pointer;
    }
    &:disabled {
      background: ${grey};
      color: ${primary};
      border: 2px solid ${tertiary};
      cursor: not-allowed;
    }
  }
  #taskWrapper {
    border: 2px solid ${tertiary};
    border-radius: 5px;
    display: flex;
    width: 60%;
    justify-content: space-between;
    background: ${primary};
    ::placeholder {
      color: ${grey};
    }
    ::-webkit-calendar-picker-indicator {
      filter: invert(0.8);
    }
    @media (max-width: 600px) {
      width: 50%;
    }
  }

  #newTaskDate {
    padding: 4px;
    border: none;
    font-size: 15px;
    width: 165px;
    color: ${secondary};
    background: transparent;
    &:focus {
      outline: none;
    }
  }
  #newTaskInput {
    padding: 10px;
    width: -webkit-fill-available;
    font-size: 15px;
    border: none;
    color: ${secondary};
    background: transparent;
    &:focus {
      outline: none;
    }
    &:input-placeholder {
      color: ${secondary};
    }
    @media (max-width: 600px) {
      font-size: 13px;
      padding: 7px;
      width: 200px;
    }
  }
  .flex {
    display: flex;
    justify-content: center;
  }
  .warning {
    width: 100%;
    color: ${white};
    p {
      margin: 3px auto;
      width: 70%;
      background: ${warning};
      border: 2px solid ${white};
      border-radius: 5px;
    }
  }
`;
