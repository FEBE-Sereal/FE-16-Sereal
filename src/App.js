import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AppRouters from "./Routes";

function App() {
  return (
    <>
      <Navbar />
      <AppRouters />
      <Footer />
    </>
  );
}

export default App;
