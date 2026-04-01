import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <ul className="movies">
    <li>
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
    </li>
  </ul>
);
