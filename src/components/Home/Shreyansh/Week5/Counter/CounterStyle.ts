import { styled } from 'styled-components';

export const CounterWrapper = styled.div`
  color: #808080;
  .mainContainer {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 60px;
    margin: 50px 0 0;
  }
  .counterContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  button {
    display: block;
    width: 50px;
    height: 50px;
    margin: 10px;
    background: #808080;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-size: 30px;
  }
  button:hover {
    background: #575b71;
    cursor: pointer;
  }
  #counter {
    font-size: 120px;
    margin: 20px;
  }
  .counterButton.disabled {
    cursor: not-allowed;
  }
`;
