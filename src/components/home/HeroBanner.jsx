  import React, { useEffect, useState } from "react";
import "./HeroBanner.css";

const banners = [
  {
    id: 1,
    image: "/banners/banner1.png",
    alt: "Fashion Sale Banner 1",
  },
  {
    id: 2,
    image: "/banners/banner2.png",
    alt: "Fashion Sale Banner 2",
  },
  {
    id: 3,
    image: "/banners/banner3.png",
    alt: "Fashion Sale Banner 3",
  },
];

function HeroBanner() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <section className="hero-banner">
      <div className="hero-slider">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`hero-slide ${index === current ? "active" : ""}`}
          >
            <img src={banner.image} alt={banner.alt} className="hero-image" />
          </div>
        ))}

        {/* Arrows */}
        <button className="hero-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="hero-btn next" onClick={nextSlide}>
          ❯
        </button>

        {/* Dots */}
        <div className="hero-dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active-dot" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;