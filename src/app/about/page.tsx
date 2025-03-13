

"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos"
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

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
          <div className="relative flex justify-center items-center">
            <Image
              src="/about.png"
              alt="me1"
              height={400}
              width={400}
              className="rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            {/* Colorful Rotating Border */}
            <div className="absolute inset-0 rounded-full border-8 border-transparent animate-rotate-scale" style={{
              background: 'linear-gradient(90deg, #ff007f, #00f0ff, #00ff00, #ffff00)',
              WebkitBackgroundClip: 'border-box',
              backgroundClip: 'border-box',
              zIndex: '-1',
            }}></div>
            {/* Circular Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 rounded-full animate-pulse"></div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="ml-3 text-4xl font-serif font-bold text-white hover:text-pink-600 animate-bounce hover:uppercase">
              <span className="text-pink-600 text-5xl hover:text-white">A</span>bout Me
            </h1>
            <h2
              className="title-font sm:text-4xl text-3xl mb-4 text-yellow-400 font-serif font-semibold relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <Typewriter
                options={{
                  strings: ['Building the Future with Generative AI and Web Development!'],
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
              I am an experienced frontend developer, currently diving deeper into full stack development with Next.js. My tech journey accelerated through the Governor Sindh IT Initiative (GIAIC) where I mastered TypeScript and began exploring Generative AI technologies. Now, I’m focused on integrating cutting-edge AI into my development process, driving innovation through Cloud Applied Generative AI Engineering to create future-ready solutions.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="inline-flex items-center justify-center text-white animate-bounce bg-blue-700 border-0 py-2 px-4 focus:outline-none hover:bg-orange-400 text-lg rounded-full transition-transform transform hover:scale-110 hover:shadow-lg">
                <Link href="https://www.facebook.com/profile.php?id=100093859596543">
                  <FaFacebookF size={26} />
                </Link>
              </button>
              <button className="inline-flex items-center justify-center text-white animate-bounce bg-pink-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-500 text-lg rounded-full transition-transform transform hover:scale-110 hover:shadow-lg">
                <Link href="https://www.instagram.com/">
                  <FaInstagram size={26} />
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