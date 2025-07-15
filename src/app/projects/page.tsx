import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const projects = [
  {
  src: "/projects2.png",
  alt: "Furniture-Website",
  title: "Furniture-Website",
  description:
  "Sleek & smart furniture shopping experience—crafted with modern UI and full functionality!",
  link: "https://furniture-website-navy.vercel.app/",
  sourceCode: "https://github.com/SaadALam7865/Furniture-website.git",
},
{
    src: "/projects1.png",
    alt: "Resume-Builder",
    title: "MAK Resume-Builder",
    description:
      "A dynamic, easy-to-use MAK-resume builder with customizable templates to help professionals..",
    link: "https://saad-a-lam7865-static-resume-builder-by-saad-alam.vercel.app/",
    sourceCode:
      "https://github.com/SaadALam7865/SaadALam7865-Static-Resume-Builder-By_Saad_Alam.git",
  },

  {
    src: "/projects3.jpg",
    alt: "E-commerce Website",
    title: "E-commerce web",
    description:
      "A fully functional e-commerce website that allows users to browse and purchase products ",
    link: "https://shopsy-web.vercel.app/",
    sourceCode: "https://github.com/SaadALam7865/shopsy_web.git",
  },

  {
    src: "/projects4.jpg", // Direct URL from public folder
    alt: "Shopping website",
    title: "Shopping Website",
    description:
      "Explore top-quality products handpicked just for you at unbeatable prices on Shopsing!",
    link: "https://shopping-web-app.vercel.app/",
    sourceCode: "https://github.com/SaadALam7865/shopping-web.git",
  },
  {
    src: "/projects5.png", // Direct URL from public folder
    alt: "Amazone Clone",
    title: "Amazone Clone-web",
    description:
      "An Amazon Clone ui A sleek, responsive front-end design that mimics the Amazon shopping experience.",
    link: "https://amazone-clone-project-one.vercel.app/",
    sourceCode: "https://github.com/SaadALam7865/Amazone_Clone_Project.git",
  },
  {
    src: "/projects7.png", // Direct URL from public folder
    alt: "React Portfolio ",
    title: "React Portfolio",
    description:
      "A sleek React-based portfolio website showcasing projects, skills, and creativity with interactive design",
    link: "https://react-portfolio-web-evhd.vercel.app/",
    sourceCode: "https://github.com/SaadALam7865/react-portfolio-web.git",
  },
  {
    src: "/project9.png", // Direct URL from public folder
    alt: "Blog Website",
    title: "Blog Website",
    description:
      " Blogify — A sleek, modern blog platform built for dynamic content and a seamless reading experience.",
    link: "blogify-web-khaki.vercel.app",
    sourceCode:
      "https://github.com/SaadALam7865/Blogify-web.git",
  },
  {
    src: "/projects8.png",
    alt: "Cofe Website",
    title: "Cofee Website",
    description:
      "A cozy blend of flavors, aroma, and passion—your perfect coffee destination. ☕",
    link: "https://coffee-web-a.vercel.app/",
    sourceCode: "#",
  },
  
];

const Project = () => {
  return (
    <section className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-white hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-pink-600 text-5xl hover:text-white">P</span>
            rojects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-purple-700 border-t-4 border-t-pink-400 hover:shadow-2xl hover:shadow-sky-500 transition-all duration-500 focus:ring-4 focus:bg-purple-500   backdrop-blur-lg  rounded-lg overflow-hidden  transform hover:scale-105  relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src} // URL path from public folder
                    alt={project.alt}
                    width={500} // Set width
                    height={300} // Set height
                    className="object-cover w-full h-full transition-all duration-500 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-gray-800 h-[220px]">
                  <Link href={project.link}>
                    <h1 className="text-2xl font-serif text-yellow-600 hover:uppercase hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <div className="flex gap-4 justify-center">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full transition duration-300 text-white text-sm"
                    >
                      <FaEye /> View
                    </Link>
                    <Link
                      href={project.sourceCode}
                      target="_blank"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-900 px-4 py-2 rounded-full transition duration-300 text-white text-sm"
                    >
                      <FaGithub /> Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
