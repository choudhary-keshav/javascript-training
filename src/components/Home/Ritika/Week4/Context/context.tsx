import React, { useEffect, useState, useMemo } from 'react';
import { AppContextValue, Movie } from '../utils/interface';
import { API_URL } from '../utils/api';
import { getMovies } from '../utils/common';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = React.createContext({});
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies(API_URL);
      console.log(movies.Search);
      setMovie(movies.Search);
    };
    fetchData();
  }, []);

  const contextValueToPass: AppContextValue = useMemo(
    () => ({
      movie
    }),
    [movie]
  );

  return <AppContext.Provider value={contextValueToPass}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
