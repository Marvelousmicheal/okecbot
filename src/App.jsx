import { useState } from "react";
import Preloader from "./assets/component/Preloader";
import Header from "./assets/component/Header";
import Footer from "./assets/component/Footer";
import CookiesToast from "./assets/component/cookiesToast";
import Button from "./assets/component/button";
import SectionHero from "./sections/sectionHero";
import Background from "./assets/component/background";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import SectionFour from "./sections/sectionFour";
import SectionFive from "./sections/sectionFive";
import SectionSix from "./sections/sectionSix";


function App() {
  return (
    <>
      {/* <Preloader/> */}
      <CookiesToast />
<Background/>
      <div className=" container mx-auto ">
        
        <Header />
      </div >
        <main className="">
          <SectionHero/>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <SectionFive/>
          <SectionSix/>
        </main>
      <Footer />
    </>
  );
}

export default App;
