import "./App.css";
import { Navbar } from "./components/navbar";
import { Main } from "./pages/main/main";
import { Menu } from "./pages/menu";
import { Reservations } from "./pages/reservations";
import { About } from "./pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
