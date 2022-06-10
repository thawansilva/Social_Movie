import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { GlobalStyle } from "./styles/Global";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeColor";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

const RoutesPage = () => {
  const { useTheme } = useContext(ThemeContext);
  const { colorTheme } = useTheme();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <MovieDetails />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <GlobalStyle theme={colorTheme} />
    </>
  );
};

export default RoutesPage;
