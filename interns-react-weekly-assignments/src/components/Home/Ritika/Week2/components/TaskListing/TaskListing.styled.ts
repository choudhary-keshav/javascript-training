import styled from 'styled-components';

export const TaskListingWrapper = styled.div`
  font-family: 'Segoe UI';
  height: 100vh;
  position: relative;
  background: radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%);
  padding: 30px;

  .mainHeading {
    color: rgb(0, 0, 0);
    font-size: 30px;
    text-align: center;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .taskListContainer {
    margin: auto;
    width: 100%;
  }

  .completedTaskContainer {
    margin: 150px auto;
    width: fit-content;
  }

  .completedTaskContainer h2 {
    font-size: 18px;
    color: rgb(128, 128, 128);
  }

  .addTaskButton {
    padding: 6px;
    background-color: rgb(0, 0, 0);
    border: none;
    border-radius: 6px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    width: 150px;
    margin: 15px 0px 15px auto;
    cursor: pointer;
  }
  .taskTable {
    margin: auto;
  }

  .taskTable th {
    padding: 10px 50px;
    border-bottom: solid rgb(0, 0, 0, 0.4) 0.5px;
    margin: 0px;
    border-collapse: collapse;
    font-size: 18px;
    font-weight: 700;
  }
  .taskTable td {
    padding: 10px 50px;
    border-bottom: solid rgb(0, 0, 0, 0.2) 0.5px;
    border-collapse: collapse;
    align-items: center;
  }
  .buttonContainer {
    display: flex;
    gap: 10px;
  }

  .deleteButton {
    background-color: rgb(52, 52, 52);
    color: rgb(255, 255, 255);
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .editButton {
    background-color: rgb(52, 52, 52);
    color: rgb(255, 255, 255);
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .status-Done {
    background-color: rgb(255, 87, 51);
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 15px;
    font-weight: 600;
    justify-content: center;
    width: 100px;
    cursor: pointer;
  }
  .status-Pending {
    background-color: rgb(0, 128, 0);
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 600;
    justify-content: center;
    width: 100px;
    cursor: pointer;
  }
  #filter {
    padding: 6px;
    background-color: rgb(0, 0, 0);
    border: none;
    border-radius: 6px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    width: 150px;
    margin: auto 15px;
    cursor: pointer;
  }
  img {
    height: 40px;
    width: 40px;
    padding-left: 3px;
  }

  @media (max-width: 1000px) {
    .s_no {
      display: none;
    }
  }
`;
