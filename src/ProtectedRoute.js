import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  // debug (optional)
  console.log("ProtectedRoute token:", token);

  return token ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
