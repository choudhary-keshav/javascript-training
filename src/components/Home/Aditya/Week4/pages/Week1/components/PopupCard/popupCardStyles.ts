import styled from 'styled-components';
import { black, grey, primary, warning, white } from '../../colorExports';

export const PopupDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: #333333aa;
  z-index: 10;
  #mainDiv {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background: ${white};
    border-radius: 15px;
    padding: 10px;
    width: 400px;
    div {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
    .taskDetails {
      width: 80%;
      margin: 2px 10%;
    }
    .warning {
      display: block;
      font-weight: bold;
      color: ${warning};
    }
    input {
      border: 2px solid ${black};
    }
    #question {
      margin: 0px;
    }
    button {
      padding: 7px;
      font-size: 16px;
      background: ${white};
      color: ${primary};
      border: 2px solid ${primary};
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background: ${primary};
        color: ${white};
      }
      &:disabled {
        border-color: ${grey};
        color: ${grey};
        background: ${white};
        cursor: not-allowed;
      }
    }

    @media (max-width: 600px) {
      width: 200px;
      #question {
        font-size: 25px;
      }
    }
  }
`;
