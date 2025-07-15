"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section className="text-yellow-400 body-font bg-gradient-to-r from-purple-900 via-black to-gray-900 overflow-hidden">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* Profile Image */}
          <div className="relative hover:shadow-xl shadow-sky-500  flex justify-center items-center">
            <Image
              src="/about.png"
              alt="me1"
              height={400}
              width={400}
              className="rounded-full shadow-lg hover:shadow-xl  transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            {/* Colorful Rotating Border */}
            <div
              className="absolute  inset-0 rounded-full border-8 border-transparent animate-rotate-scale"
              style={{
                background:
                  "linear-gradient(90deg, #ff007f, #00f0ff, #00ff00, #ffff00)",
                WebkitBackgroundClip: "border-box",
                backgroundClip: "border-box",
                zIndex: "-1",
              }}
            ></div>
            {/* Circular Background Decoration */}
            <div className="absolute inset-0  bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 rounded-full animate-pulse"></div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="ml-3 text-4xl font-serif font-bold text-white hover:text-pink-600 animate-bounce hover:uppercase">
              <span className="text-pink-600 text-5xl hover:text-white">A</span>
              bout Me
            </h1>
            <h2
              className="title-font sm:text-4xl text-3xl mb-4 text-yellow-400 font-serif font-semibold relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <Typewriter
                options={{
                  strings: [
                    "Building the Future with Web Development and Agentic AI!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* Underline Animation */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-violet-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </h2>
            <p
              className="mb-8 leading-relaxed text-lg text-gray-300 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              I’m a creative and detail-driven frontend developer with a sharp eye for UI/UX — now expanding into full-stack development with Next.js. 🚀  
          My journey began with the Governor Sindh IT Initiative (GIAIC), where I mastered TypeScript and built a strong foundation in modern web technologies.
          Lately, I’ve stepped into the world of **Generative AI**, combining my dev skills with **Agentic AI systems** to build smarter, adaptive digital experiences. I’m now officially on the path as a **Certified Robotic & Agentic AI Engineer**, pushing the frontier of intelligent, cloud-powered applications.
          Let’s build what’s next — smart, scalable, and future-ready. 💻✨

            </p>
            <div className="flex justify-center space-x-4 mt-6">
               <button className="group inline-flex items-center justify-center rounded-full 
             bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 
             px-3 py-3 text-white shadow-md ring-1 ring-inset ring-blue-500/30
             hover:from-orange-500 hover:to-pink-500 hover:shadow-xl
             focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/60 transition-all duration-300 ease-out hover:scale-110">
                <Link href="https://www.facebook.com/profile.php?id=100093859596543">
                  <FaLinkedin size={26} target="blank" />
                </Link>
              </button>
              <button className="  inline-flex items-center justify-center rounded-full 
             bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 
             px-3 py-3 text-white shadow-md ring-1 ring-inset ring-blue-500/30
             transition-all duration-300 ease-out
             hover:from-orange-500 hover:to-pink-500 hover:shadow-xl
             focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/60 hover:scale-110">
                <Link href="https://www.facebook.com/profile.php?id=100093859596543">
                  <FaFacebookF size={26} target="blank" />
                </Link>
              </button>
              <button className="group inline-flex items-center justify-center rounded-full 
             bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500
             px-3 py-3 text-white shadow-md ring-1 ring-inset ring-pink-400/30
             transition-all duration-300 ease-out
             hover:from-yellow-500 hover:to-pink-600 hover:shadow-xl
             focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-400/60 hover:scale-110">
                <Link href="https://www.instagram.com/saadalam2832/" target="_blank">
                  <FaInstagram className="transition-transform duration-300 " size={26}  />
                </Link>
              </button>
              <button
               className="group inline-flex items-center justify-center rounded-full 
             bg-gradient-to-r from-sky-600 via-blue-500 to-sky-700
             px-3 py-3 text-white shadow-md ring-1 ring-inset ring-sky-400/30
             transition-all duration-300 ease-out
             hover:from-blue-600 hover:to-sky-400 hover:shadow-xl
             focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/50 hover:scale-110 ">
                <Link href="https://x.com/Saad_Alam_Dev">
                  <FaTwitter size={26} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
