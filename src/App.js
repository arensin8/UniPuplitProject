import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Testimonial from "./components/Testimonials/Testimonial";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Virtual from "./components/virtual/Virtual";
import NewsHero from "./pages/News/NewsHero/NewsHero";
import { Switch } from "react-router-dom";
import NewsPages from "./pages/News/NewsPages";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Services />
      <Testimonial />
      <Footer />

      {/* <NewsPages /> */}
    </div>
  );
}

export default App;
