import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import image from "../../assets/about.webp";
import "./About.css";
import Map from "./Map";

const About = () => {
  return (
    <>
      <Header />
      <section id="about-section">
        <div class="about-left" data-aos="fade-up">
          <img src={image} alt="About Img" />
        </div>

        <div class="about-right">
          <h1>About Us</h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            fugiat a dolorem at similique maxime dolorum dolore enim dicta
            voluptatibus, illum recusandae, vel optio tempore ipsum incidunt
            eum. Aspernatur, repellendus.
          </p>
          <div class="address">
            <ul>
              <li>
                <span class="address-logo">
                  <i class="fas fa-paper-plane"></i>
                </span>
                <p>Address</p>
                <span class="saprater">:</span>
                <p>Jaipur, Rajasthan, India</p>
              </li>
              <li>
                <span class="address-logo">
                  <i class="fas fa-phone-alt"></i>
                </span>
                <p>Phone No</p>
                <span class="saprater">:</span>
                <p>+91 987-654-4321</p>
              </li>
              <li>
                <span class="address-logo">
                  <i class="far fa-envelope"></i>
                </span>
                <p>Email ID</p>
                <span class="saprater">:</span>
                <p>crowncoder@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Map />

      <Footer />
    </>
  );
};

export default About;
