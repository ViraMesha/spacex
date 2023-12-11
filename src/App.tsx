import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Slide, ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Favorites = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </RecoilRoot>
      <ToastContainer transition={Slide} />
    </Suspense>
  );
}

export default App;
