import { Route, Routes } from "react-router-dom";
import PrivatePage from "../../pages/Private/PrivatePage";
import NotFound from "../../pages/NotFound/NotFound";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/private" element={<PrivatePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default PrivateRoutes;
