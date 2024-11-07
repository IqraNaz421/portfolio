

import Link from 'next/link';

const AboutMe: React.FC = () => {
  return (

    <div className="animate-slide-left">
    <div className="relative bg-gradient-to-r from-teal-800 to-black text-white py-12 rounded-lg">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/images/newbg.jpg)' }}></div>
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h3>
        <p className="text-base sm:text-lg mb-6">
          I am a passionate web developer focused on creating engaging and user friendly web applications I believe in blending creativity and functionality to deliver exceptional digital experiences
        </p>
        <Link href="/about" passHref>
          <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2  border-teal-700 hover:bg-teal-700 transition duration-300">
            Read More
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
