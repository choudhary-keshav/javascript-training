import { styled } from "styled-components";

export const Feature4Wrapper = styled.div`
  .budgetContainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
  }
  .expenseForm {
    margin-bottom: 20px;
  }
  .expenseForm input {
    margin-right: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #cccccc;
  }
  .expenseForm button {
    padding: 8px 12px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .expenseForm button:hover {
    background-color: #0056b3;
  }
  .expenseList {
    list-style-type: none;
    padding: 0;
  }
  .expenseItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .expenseItem button {
    padding: 5px 8px;
    background-color: #dc3545;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .expenseItem button:hover {
    background-color: #c82333;
  }
  .totalExpenses {
    margin-top: 10px;
    font-weight: bold;
  }
`;
