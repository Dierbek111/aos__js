import './Hero.css'
import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css"; 

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <>
    <section>
      <div className="container">
        <div className="hero__wrapper">
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="600" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="200" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="900" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="200" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="600" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="200" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="600" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="200" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="600" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="200" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="600" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="200" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="600" className="hero__box"></div>
          <div data-aos="fade-right" data-aos-delay="200" className="hero__box"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero