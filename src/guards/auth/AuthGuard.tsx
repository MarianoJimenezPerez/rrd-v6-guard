import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const isLogged = true;
  return isLogged ? <Outlet /> : <Navigate to="/login" replace={true} />;
};
export default AuthGuard;
