import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<RootLayout />}>
          <Route path={"/"} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
