import styled from 'styled-components';

export const StatusDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #ffe4c4;
  border-radius: 20px;
  padding: 20px;
  box-shadow:
    inset 10px 10px 10px #87ceeb,
    inset -10px -10px 10px #e9967a;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  .userDetail {
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 15px;
  }
  .warning {
    color: #ff0000;
  }
  #newUserLabel {
    margin-right: 15px;
  }
  .font17 {
    font-size: 17px;
  }
  @media (max-width: 600px) {
    width: 250px;
  }
`;
