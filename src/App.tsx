import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RecoilRoot } from "recoil";

const Home = lazy(() => import("./components/pages/HomePage/HomePage"));
const Favorites = lazy(
  () => import("./components/pages/FavoritesPage/FavoritesPage")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </RecoilRoot>
    </Suspense>
  );
}

export default App;
