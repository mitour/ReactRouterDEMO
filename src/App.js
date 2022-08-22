import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
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
