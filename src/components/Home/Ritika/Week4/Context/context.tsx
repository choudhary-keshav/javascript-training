import React, { useEffect, useState, useMemo } from 'react';
import { AppContextValue } from '../utils/interface';
import { API_URL } from '../utils/api';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = React.createContext({});
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [movie, setMovie] = useState([]);

  const getMovies = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovie(data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const contextValue: AppContextValue = useMemo(
    () => ({
      movie
    }),
    [movie]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
