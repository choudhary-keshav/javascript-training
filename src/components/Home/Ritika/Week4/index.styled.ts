import styled from 'styled-components';

export const Week4Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

  :root {
    --text-clr: #4a5c6c;
    --bg-clr: #f2f4fc;
    --border-clr: #9cb0c1;
  }

  h2 {
    font-family: 'Lora', serif;
    color: var(--text-clr);
    font-size: 2rem;
    transition: all 0.5s linear;
  }

  a {
    text-decoration: none;
  }

  img {
    min-width: 10rem;
    max-height: 30rem;
    margin: 1rem 0;
    border-radius: 1rem;
    transition: all 0.3s linear;
  }
`;
