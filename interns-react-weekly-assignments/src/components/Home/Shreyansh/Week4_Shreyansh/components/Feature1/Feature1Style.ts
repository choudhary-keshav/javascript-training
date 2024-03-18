import { styled } from "styled-components";

export const Feature1Wrapper = styled.div`
  .fun-fact-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 0 5px #00001a;
  }
  .fun-fact-container h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .fun-fact-container p {
    margin-bottom: 20px;
  }
  .fun-fact-container button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .fun-fact-container button:hover {
    background-color: #0056b3;
  }
`;
