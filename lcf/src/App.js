import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Accueil from "./pages/accueil/Accueil";
import Live from "./pages/live/Live";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/live" element={<Live />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
