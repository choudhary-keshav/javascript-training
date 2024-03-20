import { styled } from 'styled-components';

export const Feature3Wrapper = styled.div`
  .currencyConverterContainer {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .currencyConverterContainer h2 {
    font-size: 24px;
    margin-bottom: 15px;
    text-align: center;
  }
  .currencyConverterContainer label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .currencyConverterContainer input[type='number'],
  .currencyConverterContainer select {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #cccccc;
  }
  #currencyInput {
    width: 380px;
  }
  .currencyConverterContainer select p {
    margin-top: 5px;
  }
`;
