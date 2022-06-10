const API_KEY = "dd7d21f48d9672bb6953c4d8e6709e2f";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const MOVIE_URL = `${BASE_URL}/movie/`;
const POSTER_URL = "https://image.tmdb.org/t/p/original/";
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;

const fetchMovies = (url = API_URL) => {
  const movies = fetch(url)
    .then((res) => res.json())
    .then(({ results: data }) => {
      let selectedData = data.map((movie) => ({
        id: movie["id"],
        title: movie["title"],
        poster: POSTER_URL + movie["poster_path"],
        rating: movie["vote_average"],
        releaseDate: movie["release_date"],
      }));

      return selectedData;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return movies;
};

const fetchMovieDetail = (id) => {
  const linkDetail = `${MOVIE_URL + id}?api_key=${API_KEY}`;
  const movie = fetch(linkDetail)
    .then((res) => res.json())
    .then((data) => {
      let selectedData = {
        id: data["id"],
        backPoster: POSTER_URL + data["backdrop_path"],
        title: data["title"],
        overview: data["overview"],
        rating: data["vote_average"],
        releaseDate: data["release_date"],
      };
      return selectedData;
    })
    .catch((err) => {
      console.log(err);
    });

  return movie;
};

const fetchSearchMovies = (search) => {
  console.log(search);
  const searchMovies = fetch(SEARCH_URL + search)
    .then((res) => res.json())
    .then(({ results: data }) => {
      console.log(data);
      let selectedData = data.map((movie) => ({
        id: movie["id"],
        title: movie["title"],
        poster: POSTER_URL + movie["poster_path"],
        rating: movie["vote_average"],
        releaseDate: movie["release_date"],
      }));
      return selectedData;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return searchMovies;
};
export { fetchMovies, fetchMovieDetail, fetchSearchMovies };
