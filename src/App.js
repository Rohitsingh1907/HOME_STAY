import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FlatPage from "./pages/FlatPage.js";
import Home from "./pages/Home.js";
import HomeStays from "./pages/HomeStay.js";
import PgPage from "./pages/PgPage.js";
import FlatCard from "./components/FlatCard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flat" element={<FlatPage />} />
        <Route path="/pg" element={<PgPage />} />
        <Route path="/homestays" element={<HomeStays />} />
        <Route path="/flats" element={<FlatCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
