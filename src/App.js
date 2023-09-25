import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NewsPages from "./pages/News/NewsPages";
import Roadmap from "./pages/roadmap/Roadmap";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<NewsPages />}></Route>
        <Route path="/roadmap" element={<Roadmap />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
