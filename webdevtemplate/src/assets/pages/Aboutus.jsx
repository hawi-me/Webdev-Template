import React from "react";

import satelliteImg from "../../assets/satelite1.jpg";

const AboutUS = () => {
  return (
    <>
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Text Content */}
            <div className="space-y-4 xl:pr-36 p-4 border-l-4 border-b-4 border-sky-900">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-400 uppercase tracking-widest font-semibold"
              >
                Our Mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-4xl font-bold text-white"
              >
                ESSS 
              </h1>
              <ul className="list-disc list-inside space-y-3 text-lg" data-aos="fade-up" data-aos-delay="800">
                <li>Promoting space science research and innovation in Ethiopia.</li>
                <li>Developing satellite technology to support national development.</li>
                <li>Enhancing scientific knowledge and expertise in space exploration.</li>
                <li>Building collaborations with global space agencies.</li>
              </ul>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-sky-500 text-white hover:bg-sky-600 px-6 py-2 rounded-lg font-medium transition duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Image */}
            <div data-aos="zoom-in">
              <img
                src={satelliteImg}
                alt="Ethiopian Satellite"
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUS;
