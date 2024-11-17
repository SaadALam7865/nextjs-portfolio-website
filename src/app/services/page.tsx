"use client";

import { FaCode, FaPaintBrush,  FaRocketchat } from 'react-icons/fa';
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="text-white body-font py-24 bg-gradient-to-r from-purple-900 via-black to-gray-900 relative overflow-hidden">
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-white hover:text-pink-600 animate-bounce hover:uppercase">
              <span className="text-pink-600 font-serif">S</span>ervices
            </h1>
            <div className="flex justify-center">
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Web Development Card */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-teal-700 text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
                <FaCode size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                  Web Development
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                   Web Development Expertise
                 I build scalable, secure, and high-performance web applications tailored to your business needs. Using modern technologies and frameworks, I deliver visually engaging and functional solutions that drive results from concept to deployment.
                </p>
              </div>
            </div>
            {/* Web Design Card */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="zoom-in-up" data-aos-duration="1200">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-yellow-600 text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
                <FaPaintBrush size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                  UI/ UX Designer
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                I design intuitive and visually appealing user interfaces that enhance user experience. By combining aesthetics with functionality, I create seamless digital experiences that engage users and boost satisfaction.
                </p>
              </div>
            </div>
            {/* AI chatbot Card */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="zoom-in-up" data-aos-duration="1400">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-yellow-600 text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
              <FaRocketchat size={40}/>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                AI-Powered Chatbot Integration
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                Deliver intelligent, AI-driven chat solutions to enhance customer interaction and automate communication. From development to seamless integration, I build chatbots that elevate user experience and drive efficiency.
                </p>
              </div>
            </div>
          </div>
          <Link href="../contact">
            <button className="flex mx-auto mt-16 text-white bg-gradient-to-r from-yellow-700 to-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-gradient-to-r hover:from-pink-800 hover:to-orange-600 rounded-lg text-lg transform transition-transform hover:scale-110 shadow-2xl">
              CONTACT ME
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}