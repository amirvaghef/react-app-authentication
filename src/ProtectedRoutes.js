import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "./Utility";

const ProtectedRoutes = () => {
  const prevLocation = useLocation();
  return getCookie("userName") ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: prevLocation }} />
  );
};

export default ProtectedRoutes;
