import { Routes, Route } from "react-router-dom";
import Cartable from "./pages/Cartable";
import Register from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./pages/Login";
import Cartable2 from "./pages/Cartable2";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route excat path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Cartable />} />
      </Route>
      <Route path="/Cartable" element={<ProtectedRoutes />}>
        <Route path="/Cartable" element={<Cartable />} />
      </Route>
      <Route path="/Cartable2" element={<ProtectedRoutes />}>
        <Route path="/Cartable2" element={<Cartable2 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
