
'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="animate-slide-up">
    <div className="text-white p-8 flex flex-col lg:flex-row justify-between items-center gap-10 relative">
     
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('/images/newbg.jpg')" }}></div>

    
      <div className="relative z-10 space-y-8 w-full  lg:w-1/3">
        <h2 className="text-3xl font-bold text-neon mb-4">Contact Information</h2>

       
        <div className="bg-gray-800 bg-opacity-70 p-6 border-2 border-teal-500 rounded-lg shadow-lg flex items-center gap-3 w-full mb-4">
          <FaPhoneAlt className="text-neon text-xl" />
          <span className="text-lg">+92 3160289050</span>
        </div>

        
        <div className="bg-gray-800 bg-opacity-70 p-6 border-2 border-teal-500 rounded-lg shadow-lg flex items-center gap-3 w-full mb-4">
          <FaEnvelope className="text-neon text-xl" />
          <span className="text-lg">iqoonaz4321@gmail.com</span>
        </div>

        
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg border-2 border-teal-500 shadow-lg flex items-center gap-3 w-full mb-4">
          <FaMapMarkerAlt className="text-neon text-xl" />
          <span className="text-lg">123 Main Street Karachi</span>
        </div>
      </div>

     
      <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg w-full lg:w-2/3 space-y-6 relative z-10">
        <h2 className="text-3xl font-bold text-neon mb-4">Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="name" className="block text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-neon"
              required
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-neon"
              required
            />
          </div>

          
          <div>
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-neon"
              rows={5}
              required
            ></textarea>
          </div>

         
          <button
            type="submit"
            className=" w-full p-4 bg-neon text-white border-2 border-teal-500  text-center justify-center font-bold rounded-md   hover:bg-teal-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
