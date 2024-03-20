import { styled } from 'styled-components';

export const Feature5Wrapper = styled.div`
  .goalTrackerContainer {
    max-width: 600px;
    margin: 0 auto;
  }
  .goalInput {
    margin-bottom: 10px;
  }
  .goalInput input[type='text'] {
    width: calc(100% - 80px);
    padding: 8px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    outline: none;
    margin: 5px;
  }
  .goalInput button {
    width: 80px;
    padding: 8px;
    border: none;
    background-color: #007bff;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
  }
  .goalList {
    margin-top: 20px;
  }
  .goalItem {
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
  .goalItem.completed {
    background-color: #c3e6cb;
  }
  .goalItem span {
    flex-grow: 1;
    margin-right: 10px;
  }
  .goalItem div {
    display: flex;
    align-items: center;
  }
  .goalItem input[type='checkbox'] {
    margin-right: 10px;
  }
  .goalItem button {
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
