"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";


const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <section className="text-yellow-400 body-font bg-gradient-to-r from-purple-900 via-black to-gray-900">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-5xl mb-5 font-serif font-bold ml-5 hover:uppercase text-neonYellow transition-all duration-500 hover:text-white animate-glow">
            <div>
              <h1 className="flex justify-center items-center">Hello,</h1>
              <Typewriter
                options={{
                  strings: [" I am Saad Alam..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p
            className="mb-8 leading-relaxed ml-10 text-white"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            Hi, I’m Saad Alam, a 18-year-old web developer from Karachi, Pakistan.

I specialize in HTML, CSS, JavaScript, TypeScript, and TailwindCSS to build responsive, user-friendly websites. I’m passionate about creating modern, efficient web solutions and constantly expanding my skills.

I’m also diving into frameworks like React and Next.js to enhance my ability to build scalable, high-performance applications. If you're looking for a dedicated developer to bring your ideas to life, let’s connect and create something amazing together!
          </p>
          <div className="flex justify-center ml-26">
            <button className="inline-flex text-white bg-neonPink border-0 py-2 px-4 focus:outline-none hover:bg-neonYellow text-lg rounded-full shadow-neon animate-bounceSlow transition-all duration-500">
              <Link href="https://github.com/SaadALam7865">
                <FaGithub size={26} />
              </Link>
            </button>
            <button className="ml-4 inline-flex text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-neonYellow text-lg rounded-full shadow-neonYellow animate-bounceSlow transition-all duration-500">
              <Link href="https://www.linkedin.com/in/saad-alam-5631432b5/">
                <FaLinkedin size={26} />
              </Link>
            </button>
          </div>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5 flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="relative transition-transform duration-500 hover:scale-105">
            <div
              className="absolute inset-0 rounded-full border-8 border-transparent animate-rotate-scale"
              style={{
                background:
                  "linear-gradient(90deg, #ff007f, #00f0ff, #00ff00, #ffff00)",
                WebkitBackgroundClip: "border-box",
                backgroundClip: "border-box",
                zIndex: "-1",
              }}
            ></div>
            <Image
              src="/me2.jpg"
              alt="me"
              width={500}
              height={500}
              className="rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
