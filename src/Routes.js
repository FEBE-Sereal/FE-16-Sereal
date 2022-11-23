import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Discover from "./pages/Discover/Discover";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
