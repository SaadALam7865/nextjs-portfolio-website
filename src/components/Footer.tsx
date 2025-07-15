'use client';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaHeart } from "react-icons/fa";



const Footer = () => {
  
  // Navigation data for reusability
  const navItems = {
    services: [
      "Build Website",
      "UI/ UX Designer",
      "Marketing",
      "Advertisement",
      "Web developement",
    ],
    company: ["About Us", "Contact", "Jobs", "Press Kit"],
    socialLinks: ["Home", "About", "Skills", "Projects", "Contact"],
  };

  return (
    <footer className="bg-gradient-to-br  border-t-[1px]  border-gray-500/50 from-purple-900  via-black to-gray-800 text-gray-300">
      {/* ---------- MAIN GRID ---------- */}
      <div className="max-w-7xl mx-auto  px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* 1️⃣ LOGO + SOCIAL */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/logo.jpg" // Ensure this is in /public or use a dynamic path
            alt="Saad Logo"
            data-aos="fade-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            width={60}
            height={60}
            className="rounded-lg shadow-lg hover:shadow-xl  transition-all duration-500 object-fill "
          />
          <p  data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="1000" className="max-w-[14rem] text-md leading-relaxed tracking-tight hover:text-gray-500 transition-colors duration-300">
            Turning ideas into pixel-perfect web experiences.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/SaadALam7865"
              target="_blank"
              aria-label="GitHub Profile"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
            >
              <FaGithub size={24} className="text-gray-300 hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/saad-alam-5631432b5/"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
            >
              <FaLinkedin
                size={24}
                className="text-gray-300 hover:text-white"
              />
            </Link>
            <Link
              href="https://www.instagram.com/saad_frontend_devv/" // Replace with actual handle
              target="_blank"
              aria-label="Instagram Profile"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
            >
              <FaInstagram
                size={24}
                className="text-gray-300 hover:text-white"
              />
            </Link>
            <Link
              href="https://www.facebook.com/saad.alam.732382/" // Replace with actual handle
              target="_blank"
              aria-label="Facebook Profile"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
            >
              <FaFacebook
                size={24}
                className="text-gray-300 hover:text-white"
              />
            </Link>
          </div>
        </div>

        {/* 2️⃣ SERVICES */}
        <nav data-aos="fade-up" data-aos-duration="1000" className="space-y-3">
          <h6 className="text-lg font-semibold text-pink-400">Services</h6>
          {navItems.services.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-gray-300 hover:text-pink-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* 3️⃣ COMPANY */}
        <nav data-aos="fade-up" className="space-y-3">
          <h6 className="text-lg font-semibold text-pink-400">Portfolio</h6>
          {navItems.socialLinks.map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : `${item.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="block text-gray-300  hover:text-pink-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* 4️⃣ NEWSLETTER */}
        <div data-aos="fade-up" className="space-y-4">
          <h6 className="text-lg font-semibold text-pink-400">Newsletter</h6>
          <p className="text-sm">Enter your email to get updates</p>
          <form className="flex max-w-md">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="flex-grow rounded-l-md px-3 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="rounded-r-md bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ---------- BOTTOM CREDIT ---------- */}
      <div data-aos="fade-up" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center justify-between overflow-x-hidden gap-4 md:flex-row">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <span className="text-center text-sm sm:text-base md:text-lg leading-relaxed block">
            Designed &amp; Developed by{" "}
            <span className="font-bold text-pink-500 hover:underline transition">
              Saad
            </span>{" "}
            — Frontend Master 👨‍💻
            
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
