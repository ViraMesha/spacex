import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const Home = lazy(() => import("./components/pages/HomePage/HomePage"));
const Favorites = lazy(
  () => import("./components/pages/FavoritesPage/FavoritesPage")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Suspense>
  );
}

export default App;
