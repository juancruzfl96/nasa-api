import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/favorites";
import Home from "./pages/home";

const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/favoritos" element={<Favorites />} />
    </Routes>
  );
};

export default AppRoute;
