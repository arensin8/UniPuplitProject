import React from "react";
import "./styles.css";
import Popular from "../Popular/Popular";
import PPost from "../Ppost/PPost";
import Side from "../../SideContent/side/Side";

const Homes = () => {
  return (
    <>
      <main>
        <div className="homesContainer" data-aos="fade-up">
          <section className="mainContent">
            <Popular />
            {/* <PPost /> */}
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
        
      </main>
    </>
  );
};

export default Homes;
