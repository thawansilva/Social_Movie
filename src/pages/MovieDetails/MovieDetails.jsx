import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Details from "../../components/ShowMovies/Details/Details";

const MovieDetails = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Details id={id} />
      <Footer />
    </>
  );
};

export default MovieDetails;
