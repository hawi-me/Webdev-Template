import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaTelegram, FaLinkedin } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* First Column */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Ethiopian Space Science Society
            </h1>
            <p className="text-gray-400">
              Established in <span className="font-bold">2004</span>, ESSS is a non-profit organization dedicated to the advancement of Astronomy, Astrophysics, and Space Science in Ethiopia.
            </p>
          </div>
          {/* Second Column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Key Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Donate</li>
                <li className="cursor-pointer">Future Events</li>
                <li className="cursor-pointer">Previous Managers</li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Become A Member
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">Youth Membership</li>
                <li className="cursor-pointer">Regular Membership</li>
                <li className="cursor-pointer">Friends of ESSS</li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Contact Us
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <MdCall />
                  <p>+251 11 867 7699</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdCall />
                  <p>+251 11 126 1200</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdCall />
                  <p>+251 92 272 3745</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdEmail />
                  <p>info@ethiosss.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <span className="text-sm text-gray-400">@copyright 2024 Ethiopian Space Science Society</span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="#"><FaFacebook className="text-4xl" /></a>
              <a href="#"><FaTwitter className="text-4xl" /></a>
              <a href="#"><FaYoutube className="text-4xl" /></a>
              <a href="#"><FaTelegram className="text-4xl" /></a>
              <a href="#"><FaLinkedin className="text-4xl" /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;