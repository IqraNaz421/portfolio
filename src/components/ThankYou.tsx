

import Link from 'next/link';
import { FaHandshake } from 'react-icons/fa';


const ThankYouSection: React.FC = () => {
  return (
    <div className="animate-slide-left">
      <div
        className="bg-black text-white py-16 text-center animate-fadeIn bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/newbg.jpg')" }}
      >
        <div className="container mx-auto px-6 bg-black bg-opacity-60 rounded-lg py-10">
          {/* Thank You Heading */}
          <h2 className="text-4xl font-bold mb-4">Thank You for Visiting</h2>
          <div className="w-36 h-1 mx-auto bg-teal-300 mb-6"></div> {/* Teal Line */}

          {/* Thank You Message */}
          <p className="text-lg mb-8">
            I am passionate about creating innovative and user centered web solutions Every project I take on is an opportunity to push boundaries explore new ideas and deliver high-quality results
          </p>
          <p className="text-lg mb-8">
            If you are interested in collaborating or have any questions feel free to reach out—I did love to work together and bring your vision to life
          </p>

          {/* Contact Button */}
          <Link href="https://www.linkedin.com/in/iqra-naz-43899b2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
             className="px-8 py-3 rounded-lg border-2 border-teal-700 text-white animate-pulse font-semibold text-lg transition-all duration-300 hover:bg-teal-700 inline-flex items-center">
              <FaHandshake className="mr-2 text-2xl" />
              Lets Connect
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSection;
