import styled from 'styled-components';

export const MovieWrapper = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 2%;
  border: 2px solid #000000;
  background-color: #c0d3e4;

  .grid {
    display: grid;
    gap: 2%;
  }

  .grid-4-col {
    grid-template-columns: repeat(4, 1fr);
  }

  .card {
    min-height: 21%;
    border-radius: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1200px) {
    .container {
      margin: auto;
      max-width: 78%;
    }
    .grid-4-col {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 998px) {
    .container {
      max-width: 68%;
      margin: auto;
    }
    .grid-4-col {
      grid-template-columns: 1fr 1fr;
    }

    .movie-section {
      height: auto;
      padding: 6 0;
    }

    .movie-card {
      grid-template-columns: 1fr;
    }

    .card-content {
      padding-left: 8%;
    }

    .back-button {
      margin-bottom: 6%;
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 53%;
      margin: auto;
    }
    .grid-4-col {
      grid-template-columns: 1fr;
    }
  }
`;
