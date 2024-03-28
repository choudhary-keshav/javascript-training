import React, { useContext } from 'react';
import { AppContext } from '../../Context/context';
import { AppContextValue } from '../../utils/interface';
import { NavLink, Outlet } from 'react-router-dom';
import { MovieWrapper } from './Movie.styled';
const Movies: React.FC = () => {
  const { movie } = useContext(AppContext) as AppContextValue;

  return (
    <MovieWrapper>
      <section className='movie-page'>
        <div className='grid grid-4-col'>
          {movie.map((currentMovie) => {
            const { imdbID, Title, Poster } = currentMovie;
            return (
              <NavLink key={imdbID} to={`/ritika/week4/movie/${imdbID}`}>
                <div className='card'>
                  <div className='card-info'>
                    <h2>{Title}</h2>
                    <img src={Poster} alt={Poster}></img>
                  </div>
                </div>
              </NavLink>
            );
          })}
          <Outlet />
        </div>
      </section>
    </MovieWrapper>
  );
};

export default Movies;
