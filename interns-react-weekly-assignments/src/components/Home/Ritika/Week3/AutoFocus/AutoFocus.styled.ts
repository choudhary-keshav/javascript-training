import styled from "styled-components";

export const AutoFocusWrapper = styled.div`
  
  background-color: aliceblue;
  height: 400px;
  width: 70%;
  border: 2px solid black;
  margin: 12px auto;


.form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  margin-top: 30px;
}

.headings {
  padding: 10px;
  margin: 4px 0;
  font-size: 18px;
}

.inputFields  {
 padding: 10px;
  margin: 5px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.submitButton  {
  padding: 10px;
  margin: 13px 0;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submitButton:hover {
  background-color: #0056b3;
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