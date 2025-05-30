import React from 'react';
import { BiLogoFigma } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";

// Import your images
import pic3 from '../assets/pic3.png';        // Restaurant Dashboard
import Img1 from '../assets/img1.png';
import Img3 from '../assets/img3.png';
import Img2 from '../assets/img2.png';
import Img4 from '../assets/img4.png';

// Reusable project card
function ProjectCard({ image, title, description, link }) {
  return (
    <div className="bg-white border border-[#90AEAD] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover border-b border-[#E64833]" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#244855] mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#E64833] underline font-semibold hover:text-[#874F41] transition"
        >
          View Live Project
        </a>
      </div>
    </div>
  );
}

export default function Work() {
  const projects = [
    {
      image: pic3,
      title: "Restaurant Dashboard",
      description: "Role-based dashboard where restaurant owners view & manage orders securely.",
      link: "https://your-live-link.com",
    },
    {
      image: Img1,
      title: "Egersale",
      description: "A smart buying/selling platform tailored for local market interactions.",
      link: "egersale.vercel.app",
    },
    {
      image: Img3,
      title: "ChamApp",
      description: "A group savings and loan management app for chama organizations.",
      link: "chamapp.vercel.app",
    },
    {
      image: Img2,
      title: "Coffee Shop",
      description: "A cozy UI with ordering system, gallery, and real-time order tracking.",
      link: "coffeeshop-mauve.vercel.app  ",
    },
    {
      image: Img4,
      title: "Insurance App",
      description: "Simplified insurance plan exploration and claim tracking app.",
      link: "turing-insurance.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBE9D0] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <h1 className="text-4xl font-bold text-center text-[#244855] mb-12">🚀 Featured Projects</h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Tools Used Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-[#244855] mb-6 text-center">🛠 Tools I Use</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {[
              { icon: <BiLogoFigma size={64} />, label: "Figma" },
              { icon: <FaReact size={64} />, label: "React + Tailwind" },
              { icon: <SiDjango size={64} />, label: "Django + SQLite" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center space-y-2">
                <div className="text-[#244855]">{icon}</div>
                <span className="text-[#244855] font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
