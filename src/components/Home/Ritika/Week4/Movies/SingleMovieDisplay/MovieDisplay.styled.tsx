import styled from 'styled-components';

export const SingleMovieDisplayWrapper = styled.div`
  .movie-section {
    width: 100%;
    height: 100vh;
    background-color: #4a5c6c;
    display: grid;
    place-items: center;
  }

  .loading {
    font-size: 3.2vw;
    color: #4a5c6c;
    text-align: center;
  }

  .movie-card {
    min-width: 30%;
    width: 50%;
    background-color: #f2f4fc;
    display: grid;
    gap: 2%;
    grid-template-columns: 0.6fr 1fr;
    box-shadow: #63636333 0px 2px 8px 0px;
    border-radius: 2vw;
  }

  .movie-card img {
    width: 100%;
    height: auto;
    margin: 0;
    border-radius: 0;
    border-top-left-radius: 2vw;
    border-bottom-left-radius: 2vw;
    max-height: 50vh;
  }

  .movie-card .title {
    font-size: 2vw;
    color: #4a5c6c;
    font-weight: 700;
  }

  .card-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .card-text {
    font-size: 1.5vw;
  }

  .back-button {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 2%;
    padding: 3.2% 1%;
    color: #4a5c6c;
    border: 0.2vw solid #4a5c6c;
    font-size: 1.2vw;
    border-radius: 0.5vw;
    transition: all 0.3s linear;
    cursor: pointer;
  }

  .back-button:hover {
    background-color: #4a5c6c;
    color: #f2f4fc;
  }

  .back-button {
    padding: 1.2% 3.6%;
  }
`;
