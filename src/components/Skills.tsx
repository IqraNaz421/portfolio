


'use client'
import { useRef } from 'react';
import {  FaHtml5, FaCss3Alt, FaJs,  FaNodeJs, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const SkillsSection: React.FC = () => {
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          My Skills
        </h2>
        <div className="w-36 h-1 mx-auto bg-teal-300 mb-12"></div> {/* Teal Line */}

        {/* Skills Container with Horizontal Scroll */}
        <div className="relative flex items-center">
          {/* Left Arrow (only visible on mobile) */}
          <button
            className="absolute mr-10 left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-teal-700 md:hidden"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            &#10094;
          </button>

          {/* Scrollable Skills Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto px-4 py-2 scrollbar-hide "
          >
            <SkillCard icon={<FaHtml5 />} title="HTML" description="Structuring Web Content" />
            <SkillCard icon={<FaCss3Alt />} title="CSS" description="Styling Websites" />
            <SkillCard icon={<SiTypescript />} title="TypeScript" description="Enhanced JavaScript" />
            <SkillCard icon={<FaJs />} title="JavaScript" description="Dynamic Web Interaction" />
            <SkillCard icon={<SiNextdotjs />} title="Next.js" description="React Framework" />
            <SkillCard icon={<FaNodeJs />} title="Node.js" description="Backend Development" />
            <SkillCard icon={<FaFigma />} title="Figma" description="UI/UX Design" />
            <SkillCard icon={<FaGitAlt />} title="Git" description="Version Control" />
          </div>    

          {/* Right Arrow (only visible on mobile) */}
          <button
            className="absolute right-0  top-1/2 transform -translate-y-1/2  p-2 rounded-full hover:bg-teal-700 md:hidden"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
            &#10095;
          </button>
        </div>    

       
      </div>
    </div>
  );
};

interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="min-w-[150px] bg-teal-600 text-white p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-center text-sm">{description}</p>
  </div>
);

export default SkillsSection;
