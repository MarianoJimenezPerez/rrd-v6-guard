import { Route, Routes } from "react-router-dom";
import PrivatePage from "../../pages/Private/PrivatePage";
import AuthGuard from "../../guards/auth/AuthGuard";
import NotFound from "../../pages/NotFound/NotFound";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthGuard />}>
        <Route path="/" element={<PrivatePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default PrivateRoutes;
