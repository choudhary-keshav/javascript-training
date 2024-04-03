import styled from 'styled-components';

export const Nav = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  background-color: #efeeee;
  padding: 10px;
  border-radius: 5px;
  .links {
    padding: 10px;
    background-color: #e77777;
    color: #ffffff;
    text-decoration: none;
    border: 2px solid transparent;
    font-size: 15px;
    border-radius: 4px;
    &:hover {
      border-color: #e77777;
      color: #e77777;
      background-color: #ffffff;
      font-weight: bold;
    }
    &:active {
      margin: 2px;
      padding: 8px;
    }
  }
`;
