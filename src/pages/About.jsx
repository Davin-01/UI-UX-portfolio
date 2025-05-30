import React from 'react';
import profileImage from '../assets/pic2.jpg'; // replace with your actual image

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBE9D0] to-[#90AEAD] px-6 py-16 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center gap-10">

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#E64833] shadow-md"
          />
        </div>

        {/* About Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#244855] mb-4">About Me</h2>
          <p className="text-gray-700 text-lg mb-4">
            I’m a passionate <span className="text-[#E64833] font-semibold">UI/UX designer</span> and <span className="text-[#874F41] font-semibold">frontend developer</span> focused on crafting delightful user experiences.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            I blend design thinking with practical frontend skills to build responsive, user-friendly apps using <span className="text-[#2C3E50] font-semibold">React</span>, <span className="text-[#2C3E50] font-semibold">Tailwind</span>, and <span className="text-[#2C3E50] font-semibold">Django APIs</span>.
          </p>
          <p className="text-gray-700 text-lg">
            Some of my key projects include a <span className="text-[#E64833] font-semibold">restaurant dashboard</span>, <span className="text-[#874F41] font-semibold">study planner</span>, and an <span className="text-[#244855] font-semibold">event system</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
