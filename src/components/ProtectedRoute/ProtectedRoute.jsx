import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userAuthContext } from "../../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(userAuthContext);
  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
