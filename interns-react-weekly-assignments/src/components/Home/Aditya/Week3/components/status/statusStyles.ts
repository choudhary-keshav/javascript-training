import styled from "styled-components";

export const StatusDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: bisque;
  border-radius: 20px;
  box-shadow: 0px 0px 10px skyblue;
  padding:10px;

  @media (max-width: 600px) {
    width: 250px;
  }
`;
