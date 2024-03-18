import { styled } from "styled-components";

export const Feature4Wrapper = styled.div`
  .budget-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
  }
  .expense-form {
    margin-bottom: 20px;
  }
  .expense-form input {
    margin-right: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #cccccc;
  }
  .expense-form button {
    padding: 8px 12px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .expense-form button:hover {
    background-color: #0056b3;
  }
  .expense-list {
    list-style-type: none;
    padding: 0;
  }
  .expense-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .expense-item button {
    padding: 5px 8px;
    background-color: #dc3545;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .expense-item button:hover {
    background-color: #c82333;
  }
  .total-expenses {
    margin-top: 10px;
    font-weight: bold;
  }
`;
