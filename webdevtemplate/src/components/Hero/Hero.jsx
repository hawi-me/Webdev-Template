import React from "react";
import SpaceImage from "../../assets/moon-surface-hd.png";
const Hero = () => {
  return (
    <div className="relative h-screen bg-black/40">
      {/* Main Content */}
      <div className="h-full flex justify-center items-center p-6">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Section - Text Content */}
          <div className="text-white space-y-6 lg:pr-20">
            <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-extrabold leading-tight">
              Ethiopian Space Science Society
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg opacity-90">
              Founded in 2004 with 47 members, the Ethiopian Space Science Society is a 
              non-profit organization dedicated to advancing Astronomy, Astrophysics, and Space Technology. 
              It brings together professionals, enthusiasts, and institutions passionate about space exploration.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-lg shadow-lg transition-all duration-300"
            >
              Discover More
            </button>
          </div>

          {/* Right Section - Background Image */}
          <div className="relative">
            <img
              src={SpaceImage}
              alt="Ethiopian Space Science"
              className="w-full max-h-[400px] object-cover rounded-lg shadow-lg"
              data-aos="fade-left"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black h-[60px]"></div>
    </div>
  );
};

export default Hero;
