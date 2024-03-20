import styled from 'styled-components';

export const SearchUserWrapper = styled.div`
  .results {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: auto;
    padding: 4px;
    background: #f0ffff;
    font-size: 17px;
    margin: 2px auto;
    border: 1px solid;
    border-radius: 5px;
    @media (max-width: 600px) {
      width: -webkit-fill-available;
    }
    select {
      font-size: 14px;
      padding: 2px;
      border-radius: 10px;
    }
  }
  label {
    margin-right: 5px;
  }
  .userDetail {
    @media (max-width: 600px) {
      width: 68%;
    }
  }
`;
