import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Discover from "./pages/Discover/Discover";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Detail from "./pages/Detail/Detail";
import Dashboard from "./pages/Dashboard/Dashboard";

const AppRouter = () => {
  const token = window.localStorage.getItem("token") === null;
  console.log(window.localStorage.getItem("token"));
  return (
    <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/login" element={token ? <Login /> : <Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/explore">
        <Route path="" element={<Explore />} />
        <Route path="detail" element={<Detail />} />
      </Route>
      <Route path="/detail/:_id" element={<Detail />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
