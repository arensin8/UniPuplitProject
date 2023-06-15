import React from "react";
// import Discover from "../../discover/Discover"
// import Side from "../../sideContent/side/Side"
// import Life from "../life/Life"
// import Music from "../musics/Music"
// import Ppost from "../Ppost/Ppost"
import "./styles.css"
import Popular from '../Popular/Popular';
import PPost from "../Ppost/PPost";
import Side from "../../SideContent/side/Side";

const Homes = () => {
  return (
    <>
      <main>
        <div className='homesContainer'>
          <section className='mainContent'>
            <Popular />
            <PPost />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>

    </>
  )
}

export default Homes