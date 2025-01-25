import Image from 'next/image';
import { FaLink, FaGithub, FaLaptopCode } from 'react-icons/fa';
import Link from 'next/link';

interface Project {
  name: string;
  image: string;
  link: string;
  description: string;
  github?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    { 
      name: 'Car Rental', 
      image: '/images/rent.jpeg', 
      link: 'https://q2-hakhathon-car-rent-shop-9fr1.vercel.app/', 
      description: 'A modern car rental website built with React and Next.js for easy and fast booking.' 
    },
    { 
      name: 'Blog', 
      image: '/images/b.jpeg', 
      link: 'https://dynamic-blog-website-one.vercel.app/', 
      description: 'A modern blog website built with Next.js for fast performance and seamless user experience.' 
    },
    { 
      name: 'Baby Shop', 
      image: '/images/baby.jpeg', 
      link: 'https://baby-baba-shop.vercel.app/', 
      description: 'A caring baby shop website offering a wide range of baby products for all your little one\'s needs.' 
    },
    { 
      name: 'Perfume', 
      image: '/images/p.jpeg', 
      link: 'https://my-perfume-store-s5tl.vercel.app/', 
      description: 'An elegant perfume website with a smooth shopping experience and rich fragrance collections.' 
    },
    { 
      name: 'Portfolio', 
      image: '/images/port.jpg', 
      link: 'https://html-portfolio-pink.vercel.app/', 
      description: 'A dynamic portfolio website with animations and a smooth user experience.' 
    },
    { 
      name: 'Todo list app', 
      image: '/images/list.jpeg', 
      link: 'https://to-do-list-app-three-dusky.vercel.app/', 
      description: 'A mobile-responsive dashboard application with real-time data integration.' 
    },
    { 
      name: 'Ice Cream Shop', 
      image: '/images/ice.jpg', 
      link: 'https://ice-creame-site.vercel.app/', 
      description: 'A delightful ice cream website offering a variety of flavors and delicious treats for all ages.' 
    },
    { 
      name: 'Static Resume', 
      image: '/images/r.png', 
      link: 'https://static-drab.vercel.app/', 
      description: 'A blogging platform with rich text editing and comment sections built using Vue.js.' 
    },
    { 
      name: 'Resume Builder', 
      image: '/images/builder.jpg', 
      link: 'https://finally-prepared-ehmg.vercel.app/', 
      description: 'An online booking system with calendar integration and email notifications.' 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="animate-slide-left">
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: 'url(/images/newbg.jpg)' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl text-center mb-10 font-bold text-white animate-fadeIn">My Projects</h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800  rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-zoomIn"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-500">{project.name}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                <div className="flex mt-4 space-x-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-teal-500 hover:text-teal-400 inline-block transition-all duration-200 transform hover:scale-105"
                  >
                    <FaLink size={20} />
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-teal-500 hover:text-teal-400 inline-block transition-all duration-200 transform hover:scale-105"
                    >
                      <FaGithub size={20} />
                    </Link>
                  )}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-teal-500 hover:text-teal-400 inline-block transition-all duration-200 transform hover:scale-105"
                  >
                    <FaLaptopCode size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Scroll Down Button with Hover Effect */}
        <div className="flex justify-center mt-10">
          <Link href="/project">
          <button className="text-teal-500 font-semibold text-2xl transform hover:scale-110 transition-all duration-300 hover:text-teal-400">
            &#8595; Scroll Down
          </button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;

