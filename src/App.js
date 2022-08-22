import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link } from "react-router-dom";
import "./css/App.scss";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <header className="navbar">
        <nav className="wrap d-flex align-center">
          <Link className="d-flex align-center" to="/">
            <FontAwesomeIcon className="logo" icon={faOtter} />
            <h1>高雄旅遊網</h1>
          </Link>
          <ul className="d-flex flex-end">
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
      </header>
      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
