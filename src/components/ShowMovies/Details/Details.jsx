import { useEffect, useState } from "react";
import { fetchMovieDetail } from "../../../services/MovieDBAPI";
import { Container } from "../../Container";
import { StyledDetails } from "./StyledDetails";

const Details = ({ id }) => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      setMovie(await fetchMovieDetail(id));
    };
    fetchAPI();
  }, []);

  return (
    <>
      <Container>
        {movie ? (
          <StyledDetails>
            <div className="img-container">
              <img src={movie.backPoster} alt={movie.title} />
            </div>
            <h1>{movie.title}</h1>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
            <h3>Released Date: </h3>
            <p>{movie.releaseDate}</p>
            <h3>Rating: </h3>
            <p>{movie.rating}</p>
          </StyledDetails>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </>
  );
};

export default Details;
