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

<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>;
export default App;
