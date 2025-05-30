import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#244855] text-[#FBE9D0] py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-xl font-semibold tracking-wide">
          © {new Date().getFullYear()} Your Name
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E64833] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E64833] transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[#E64833] transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Quick Links (Optional) */}
        <div className="text-sm space-x-4 hidden md:block">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/work" className="hover:text-white">Work</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
