import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BreadPage from "./pages/BreadPage/BreadPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie/:id" element={<BreadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
