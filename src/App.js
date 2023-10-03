import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NewsPages from "./pages/News/NewsPages";
import Roadmap from "./pages/roadmap/Roadmap";
import { AnimatePresence } from "framer-motion";
import Singlenews from "./pages/News/singleNews/Singlenews";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<NewsPages />}></Route>
          <Route path="/news/:id" element={<Singlenews />} />
          <Route path="/roadmap" element={<Roadmap />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
