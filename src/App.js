import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AppRouters from "./Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <AppRouters />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
