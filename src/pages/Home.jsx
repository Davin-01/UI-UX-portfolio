import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/pic1.jpg'; // Background image
import pic2 from '../assets/pic2.jpg'; // Profile image

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(36, 72, 85, 0.9), rgba(135, 79, 65, 0.9)), url(${pic1})`,
      }}
    >
      <div className="max-w-4xl w-full text-center text-white">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={pic2}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-[#FBE9D0]"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-[#FBE9D0]">
          Hi, I’m David Moenga a UI/UX Designer & Developer
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#FBE9D0] mb-8 leading-relaxed">
          I design clean, accessible, and delightful user experiences using React, Tailwind CSS, and Figma.
        </p>

        {/* CTA */}
        <Link
            to="/projects"
     className="inline-block bg-[#E64833] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#c53c29] transition"
    >
    View My Work
        </Link>


        {/* Features */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 text-center">
          <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-md backdrop-blur-md hover:bg-opacity-20 transition">
            <h3 className="text-lg font-bold text-gray-600 mb-2">UX Research</h3>
            <p className="text-sm text-red-600">Personas, interviews, journey maps & insights.</p>
          </div>
          <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-md backdrop-blur-md hover:bg-opacity-20 transition">
            <h3 className="text-lg font-bold text-gray-600 mb-2">UI Design</h3>
            <p className="text-sm text-red-600">Wireframes, visual design, prototyping.</p>
          </div>
          <div className="p-4 bg-white bg-opacity-10 rounded-xl shadow-md backdrop-blur-md hover:bg-opacity-20 transition">
            <h3 className="text-lg font-bold text-gray-600 mb-2">Frontend Dev</h3>
            <p className="text-sm text-red-600">Responsive UIs with React & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
