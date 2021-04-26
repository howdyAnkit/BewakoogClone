import React from "react";
import firstAdData from "../ads";
import AdCard from "../components/AdCard";
import CarouselAd from "../components/CarouselAd";
// import { topWear, bottomWear } from "../BrowseWear";

import "./home.css";

function Home() {
  console.log(firstAdData);
  return (
    <div className='container'>
      <div className='AdCard_container'>
        {firstAdData.map((Ad, key) => (
          <AdCard Ad={Ad} key={key} />
        ))}
      </div>
      <img
        src='https://images.bewakoof.com/uploads/grid/app/Brand-Trust-desktop-underslider-1592992663.jpg'
        className='AdCard_horizontal'
        alt='adv'
      />
      <div style={{ marginTop: "20px" }}>
        <CarouselAd />
      </div>

      {/* Grids */}
      <img
        src='https://images.bewakoof.com/uploads/grid/app/bewakoof-oof-sale-title-topwear-1591802751.png'
        className='Ad_horizontal AdGif BottomWear mx-auto w-100'
        alt='adv'
      />
      {/* <div className='home__topWear'>
        {topWear.map((item, key) => (
          <img
            className='home__topWearItem'
            src={item}
            alt={key}
            key={key}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div> */}
      <img
        src='https://images.bewakoof.com/uploads/grid/app/bewakoof-oof-sale-title-bottomwear-1591802750.png'
        className='Ad_horizontal AdGif BottomWear mx-auto w-100'
        alt='adv'
      />
      {/* <div className='home__topWear'>
        {bottomWear.map((item, key) => (
          <img
            className='home__topWearItem'
            src={item}
            alt={key}
            key={key}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div> */}

      <img
        src='https://images.bewakoof.com/uploads/grid/app/branding-section-mobile-1589380737.png'
        className='Ad_horizontal AdGif VoiceForVocal mx-auto w-100'
        alt='adv'
      />
      <img
        src='https://images.bewakoof.com/uploads/grid/app/feedback-survey-bewakoof-desktop-1588604341.gif'
        className='Ad_horizontal AdGif'
        alt='adv'
      />
      <img
        src='https://images.bewakoof.com/uploads/grid/app/announcement-desktop-strip--1--1594387974.jpg'
        className='Ad_horizontal doctor_desktop'
        alt='adv'
      />
      <img
        src='https://images.bewakoof.com/uploads/grid/app/announcement-msite-strip--1--1594387975.jpg'
        className='Ad_horizontal doctor_mobile'
        alt='adv'
      />

      {/* Essentials */}
      {/* Accessories */}
    </div>
  );
}

export default Home;
