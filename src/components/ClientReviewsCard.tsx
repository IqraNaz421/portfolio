

'use client'
import { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaEnvelope, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ClientReviews: React.FC = () => {
  // State to keep track of the active review index
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Reviews data
  const reviews = [
    {
      name: "Sarah Johnson",
      title: "CEO, Tech Solutions",
      review: "Amazing work! Exceeded my expectations with a beautifully designed website",
      rating: 5,
      imageSrc: "/images/1.webp",
    },
    {
      name: "Michael Smith",
      title: "Founder, Startup Hub",
      review: "Very professional, timely, and efficient. Looking forward to future collaborations",
      rating: 4,
      imageSrc: "/images/2.jpeg",
    },
    {
      name: "Emily Brown",
      title: "Marketing Manager",
      review: "Loved the creativity and unique approach! Truly a pleasure to work with",
      rating: 5,
      imageSrc: "/images/3.jpg",
    },
    {
      name: "John Davis",
      title: "Product Manager, Digital World",
      review: "The team understood our vision and delivered an excellent product. Highly recommended!",
      rating: 5,
      imageSrc: "/images/4.jpg",
    },
    {
      name: "Olivia Green",
      title: "Creative Director, Green Agency",
      review: "Incredible design skills! The final product was better than I had hoped for",
      rating: 4,
      imageSrc: "/images/5.jpg",
    },
    {
      name: "James Wilson",
      title: "Head of Operations, Global Co",
      review: "Professional service with great attention to detail. Definitely worth every penny",
      rating: 5,
      imageSrc: "/images/6.webp",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Client Reviews</h2>
        <div className="w-36 h-1 mx-auto bg-teal-300 mb-12"></div> 

        {/* Reviews Grid for Larger Screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {/* Single Card with Dot Navigation for Mobile */}
        <div className="md:hidden">
          <ReviewCard {...reviews[activeReviewIndex]} />

          {/* Dots for navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReviewIndex(index)}
                className={`w-4 h-4 rounded-full ${
                  activeReviewIndex === index ? 'bg-teal-300' : 'bg-teal-700'
                }`}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12 animate-pulse">
          <button className="px-6 py-3 rounded-lg border-2 border-teal-700 hover:bg-teal-700 transition duration-300 mb-6 mx-auto">
            <Link href="/contact" className="flex items-center justify-center text-white font-semibold text-lg transition-all duration-200 transform hover:scale-105">
              <FaEnvelope className="mr-2 text-2xl" />
              Click here to contact me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

interface ReviewCardProps {
  name: string;
  title: string;
  review: string;
  rating: number;
  imageSrc: string; 
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, title, review, rating, imageSrc }) => (
  <div className="w-full bg-teal-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
    <Image src={imageSrc} alt={name} width={100} height={100} className="w-16 h-16 rounded-full mb-4 object-cover" />

    <div className="text-center text-xl mb-2">
      <FaQuoteLeft className="inline-block text-teal-300 mr-1" />
      {review}
      <FaQuoteRight className="inline-block text-teal-300 ml-1" />
    </div>
    <div className="text-lg font-semibold mt-4">{name}</div>
    <p className="text-sm text-teal-100">{title}</p>
    <div className="flex mt-3">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
    </div>
  </div>
);

export default ClientReviews;
