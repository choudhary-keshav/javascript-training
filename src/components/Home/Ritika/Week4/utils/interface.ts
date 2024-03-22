export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  imdbRating?: string;
  Genre?: string;
  Released?: string;
  Country?: string;
}
export interface AppContextValue {
  movie: Movie[];
}
