import { Routes, Route, Link } from "react-router-dom";
import "./css/App.scss";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="about">關於我</Link>
          </li>
          <li>
            <Link to="faq">常見問答</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to 高雄旅遊網</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
