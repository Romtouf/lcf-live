import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Accueil from "./pages/accueil/Accueil";
import Live from "./pages/live/Live";
import Error from "./pages/error/Error";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <div className="App">
      <Router>
        <Loader />
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/live" element={<Live />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
