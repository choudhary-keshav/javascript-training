import { styled } from "styled-components";

export const Feature5Wrapper = styled.div`
  .goal-tracker-container {
    max-width: 600px;
    margin: 0 auto;
  }
  .goal-input {
    margin-bottom: 10px;
  }
  .goal-input input[type="text"] {
    width: calc(100% - 80px);
    padding: 8px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    outline: none;
    margin: 5px;
  }
  .goal-input button {
    width: 80px;
    padding: 8px;
    border: none;
    background-color: #007bff;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
  }
  .goal-list {
    margin-top: 20px;
  }
  .goal-item {
    background-color: #f8f9fa;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    width: calc(100% - 80px);
  }
  .goal-item.completed {
    background-color: #c3e6cb;
  }
  .goal-item span {
    flex-grow: 1;
    margin-right: 10px;
  }
  .goal-item div {
    display: flex;
    align-items: center;
  }
  .goal-item input[type="checkbox"] {
    margin-right: 10px;
  }
  .goal-item button {
    padding: 5px;
    border: none;
    background-color: #ff3333;
    color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
  }
  #description,
  #deadline {
    margin: 5px;
  }
`;
