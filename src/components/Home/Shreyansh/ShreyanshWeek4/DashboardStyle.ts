import { styled } from 'styled-components';

export const DashboardWrapper = styled.div`
  .dashboard-container {
    max-width: 800px;
    margin: 30px auto 0;
    padding: 20px;
    background-color: #808080;
    border-radius: 10px;
  }
  .navbar {
    background-color: #000080;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .navbar li {
    display: inline;
    margin-right: 20px;
  }
  .navbar li a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }
  .feature-container {
    margin-top: 20px;
  }
  .feature-button button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .feature-button button:hover {
    background-color: #0056b3;
  }
`;
