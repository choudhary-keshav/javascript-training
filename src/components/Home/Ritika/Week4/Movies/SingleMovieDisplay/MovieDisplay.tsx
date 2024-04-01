import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Movie } from '../../utils/interface';
import { SingleMovieDisplayWrapper } from './MovieDisplay.styled';
import { getMovies } from '../../utils/common';

const MovieDisplay: React.FC = () => {
  const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<Movie | null>(null);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies(`${API_URL}&i=${id}`);
      setIsLoading(false);
      setMovie(movies);
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    );
  }
  return (
    <SingleMovieDisplayWrapper>
      <section className='movie-section'>
        <div className='movie-card'>
          {movie && (
            <>
              <img src={movie.Poster} alt='' />
              <div className='card-content'>
                <p className='title'>{movie.Title}</p>
                <p className='card-text'>{movie.Released}</p>
                <p className='card-text'>{movie.Genre}</p>
                <p className='card-text'>{movie.imdbRating}</p>
                <p className='card-text'>{movie.Country}</p>
              </div>
              <button className='back-button' onClick={handleGoBack}>
                Go Back
              </button>
              <Outlet />
            </>
          )}
        </div>
      </section>
    </SingleMovieDisplayWrapper>
  );
};

export default MovieDisplay;
