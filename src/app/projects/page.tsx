




import Image from "next/image";
import Link from "next/link";

const projects = [

  {
    src: "/Images/projects2.png",
    alt: "Nextjs.15",
    title: "Nextjs 15",
    description: "Stay informed with the latest insights and trends, powered by the fast and modern Next.js 15 framework..",
    link: "https://nextjs.org/blog/next-15"
  },
  {
    src: "/Images/projects1.png",
    alt: "Resume-Builder",
    title: "MAK Resume-Builder",
    description: "A dynamic, easy-to-use MAK-resume builder with customizable templates to help professionals create standout resumes effortlessly.",
    link: "https://saad-a-lam7865-static-resume-builder-by-saad-alam.vercel.app/"
  },
 
  {
    src: "/Images/projects3.jpg",
    alt: "E-commerce Website",
    title: "e-commerce web",
    description: "A fully functional e-commerce website that allows users to browse and purchase products ",
    link: "https://shopsy-web.vercel.app/"
  },

  {
    src: "/Images/projects4.jpg", // Direct URL from public folder
    alt: "Shopping website",
    title: "Shopping Website",
    description: "Explore top-quality products handpicked just for you at unbeatable prices on Shopsing!",
    link: "https://shopping-web-app.vercel.app/"
  },
  {
    src: "/Images/projects5.png", // Direct URL from public folder
    alt: "Amazone Clone",
    title: "Amazone Clone-web",
    description: "An Amazon Clone ui A sleek, responsive front-end design that mimics the Amazon shopping experience.",
    link: "https://world-tours-lime.vercel.app"
  },
  {
    src: "/Images/projects7.png", // Direct URL from public folder
    alt: "React Portfolio ",
    title: "React Portfolio",
    description: "A sleek React-based portfolio website showcasing projects, skills, and creativity with interactive design",
    link: "https://react-portfolio-web-evhd.vercel.app/"
  },
  {
    src: "/Images/projects6.png",     // Direct URL from public folder
    alt: "An Interactive Calculator",
    title: "Interactive Calculator",
    description: "An interactive calculator with dynamic features for seamless arithmetic and functional calculations.",
    link: "https://fronted-developer-projects.vercel.app/"
  },
  {
    src: "/Images/projects8.png",
    alt: "Cofe Website",
    title: "Cofee Website",
    description: "A cozy blend of flavors, aroma, and passion—your perfect coffee destination. ☕",
    link: "https://coffee-web-a.vercel.app/"
  },
];

const Project = ( ) => {
  return (
    <section className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-white hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-pink-600 text-5xl hover:text-white">P</span>rojects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right" data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-purple-700 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src}  // URL path from public folder
                    alt={project.alt}
                    width={500}  // Set width 
                    height={300} // Set height
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-gray-800 h-[220px]">
                  <Link href={project.link}>
                    <h1 className="text-2xl font-serif text-yellow-600 hover:uppercase hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-gray-400">
                    {project.description}
                  </p>
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