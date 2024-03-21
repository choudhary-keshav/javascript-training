import { styled } from 'styled-components';

export const RandomFactsWrapper = styled.div`
  .funFactContainer {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 0 5px #00001a;
  }
  .funFactContainer h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .funFactContainer p {
    margin-bottom: 20px;
  }
  .funFactContainer button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .funFactContainer button:hover {
    background-color: #0056b3;
  }
`;
