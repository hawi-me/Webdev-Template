import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaRocket, FaEye, FaTasks, FaCogs } from "react-icons/fa";

const HeroData = [
  {
    title: "Ethiopian Space Science Society",
    subtitle: "Advancing Space Science and Technology in Ethiopia",
    description: [
      "Established in 2004 as a non-profit organization.",
      "Over 15,000 individual members.",
      "30 branch associations and 58 institutional members."
    ],
    icon: <FaRocket className="text-5xl text-white" />,
    aosDelay: "100",
  },
  {
    title: "Vision",
    subtitle: "Building a Scientific Society in Ethiopia",
    description: [
      "Make Ethiopia a leading scientific society.",
      "Foster space science and technology development.",
      "Enable the country to benefit from advancements."
    ],
    icon: <FaEye className="text-5xl text-white" />,
    aosDelay: "300",
  },
  {
    title: "Mission",
    subtitle: "Fostering Competence and Innovation",
    description: [
      "Develop competent professionals in space science.",
      "Build institutional capacity in the field.",
      "Raise awareness and develop technical skills."
    ],
    icon: <FaTasks className="text-5xl text-white" />,
    aosDelay: "500",
  },
  {
    title: "Our Goals",
    subtitle: "Shaping the Future of Space Science",
    description: [
      "Develop strong human resources in space science.",
      "Build necessary infrastructure for research.",
      "Promote public-private sector collaboration."
    ],
    icon: <FaCogs className="text-5xl text-white" />,
    aosDelay: "700",
  },
];

const HeroCard = () => {
  return (
    <section className="bg-primary relative py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {HeroData.map((data, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="flex flex-col items-center rounded-xl bg-sky-900/70 backdrop-blur-lg text-white text-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {data.icon}
              <h1 className="text-2xl font-bold mt-4">{data.title}</h1>
              <h3 className="text-lg text-gray-300 mt-2">{data.subtitle}</h3>
              <ul className="text-base mt-4 text-left space-y-2">
                {data.description.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-sky-300">&#8226;</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <img
          src={wave}
          alt="Wave Background"
          className="h-[150px] w-full object-cover mix-blend-screen -translate-y-16 relative z-0"
        />
      </div>
    </section>
  );
};

export default HeroCard;
