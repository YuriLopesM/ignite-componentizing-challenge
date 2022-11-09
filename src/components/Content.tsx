import { ReactNode } from "react";
import { MovieCard } from "./MovieCard";
import { GenreResponseProps, MovieProps } from "../types/interfaces";

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
  header: ReactNode
}

export function Content({
  movies,
  selectedGenre,
  header
}: ContentProps) {
  return (
    <div className="container">
        {header}
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}