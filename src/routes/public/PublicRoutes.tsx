import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import AuthGuard from "../../guards/auth/AuthGuard";
import PrivateRoutes from "./../private/PrivateRoutes";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route element={<AuthGuard />}>
        <Route path="/*" element={<PrivateRoutes />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
