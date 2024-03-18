import { styled } from "styled-components";

export const Feature3Wrapper = styled.div`
  .currency-converter-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .currency-converter-container h2 {
    font-size: 24px;
    margin-bottom: 15px;
    text-align: center;
  }
  .currency-converter-container label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .currency-converter-container input[type="number"],
  .currency-converter-container select {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #cccccc;
  }
  #currencyInput {
    width: 380px;
  }
  .currency-converter-container select {
    margin-top: 5px;
  }
  .currency-converter-container p {
    margin-top: 10px;
  }
`;
