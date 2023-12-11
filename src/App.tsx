import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RecoilRoot } from "recoil";
import { Slide, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer transition={Slide} />
    </Suspense>
  );
}

export default App;
