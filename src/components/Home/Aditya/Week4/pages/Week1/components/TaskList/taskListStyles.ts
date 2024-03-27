import styled from 'styled-components';
import { white } from '../../colorExports';

export const TaskListWrapper = styled.div`
  text-align: center;
  margin-bottom: 100px;
  #heading {
    display: flex;
    justify-content: center;
    h1 {
      font-family: 'Madimi One';
      font-size: 45px;
      color: ${white};
    }
  }
  h4 {
    margin-top: 0px;
    color: ${white};
    font-family: sans-serif;
  }
  select {
    margin-bottom: 10px;
    font-size: 16px;
    padding: 5px;
    border-radius: 10px;
  }
`;
