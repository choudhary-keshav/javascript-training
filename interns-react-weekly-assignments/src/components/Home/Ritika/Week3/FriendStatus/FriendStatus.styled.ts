import styled from 'styled-components';

export const FriendStatusWrapper = styled.div`
  background-color: aliceblue;
  height: 800px;
  width: 70%;
  border: 2px solid black;
  margin: 12px auto;

  .headings {
    padding: 10px;
    margin: 4px 0;
    font-size: 18px;
  }

  .inputFields {
    padding: 10px;
    margin: 5px 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .submitButton {
    padding: 10px;
    margin: 8px 0;
    width: 100%;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .mainContainer {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    margin-top: 30px;
  }
  @media screen and (max-width: 576px) {
  .AutoFocusWrapper {
    max-width: 40%;
  }

  .form {
    width: 40%;
  }

  .headings {
    font-size: 16px;
  }

  .inputFields,
  .submitButton {
    font-size: 14px;
  }
}
`

export const EmployeeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const EmployeeItem = styled.li`
  margin-bottom: 10px;
`;

export const EmployeeButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
  @media screen and (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;
;
