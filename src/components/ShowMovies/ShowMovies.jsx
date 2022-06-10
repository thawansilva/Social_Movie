import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeColor";
import { fetchMovies, fetchSearchMovies } from "../../services/MovieDBAPI";
import { StyledCard } from "../../styles/Cards/StyledCards";
import { Grid } from "../../styles/Layout";
import { Container } from "../Container";
import { MoviesContainer } from "./StyledMoviesContainer";

const ShowMovies = () => {
  const [movies, setMovies] = useState();
  const { useTheme } = useContext(ThemeContext);
  const { colorTheme } = useTheme();

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchMovies());
    };
    fetchAPI();
  }, []);

  const handleChange = async (e) => {
    const search = e.target.value;
    if (search) {
      setMovies(await fetchSearchMovies(search));
    } else {
      setMovies(await fetchMovies());
    }
  };

  const showMovies = movies ? (
    movies.map((movie, index) => (
      <StyledCard theme={colorTheme} key={index}>
        <div>
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.poster} alt={movie.title} />
          </Link>
        </div>
        <h4>{movie.title}</h4>
        <p>Released: {movie.releaseDate} </p>
        <p>Rated: {movie.rating} </p>
      </StyledCard>
    ))
  ) : (
    <p>Loading...</p>
  );
  return (
    <>
      <Container>
        <MoviesContainer>
          <div className="input_movie">
            <form>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Search Movie"
              />
            </form>
          </div>
          <Grid>{showMovies}</Grid>
        </MoviesContainer>
      </Container>
    </>
  );
};

export default ShowMovies;
