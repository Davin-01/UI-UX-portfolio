import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FBE9D0] to-[#90AEAD] px-6 py-16">
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-xl w-full text-center">
        <h2 className="text-4xl font-bold text-[#244855] mb-6">Let’s Work Together</h2>
        
        <p className="text-lg text-gray-700 mb-4">
          I'm currently open to freelance or full-time opportunities. Let’s connect!
        </p>

        {/* Email */}
        <div className="flex justify-center items-center gap-2 text-[#E64833] font-medium text-lg mb-6">
          <FaEnvelope />
          <a href="mailto:moengadavid90@gmaiil.com" className="hover:underline">
            moengadavid90@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl text-[#244855]">
          <a href="https://linkedin.com/in/David Moenga" target="_blank" rel="noreferrer" className="hover:text-[#E64833] transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Davin-01" target="_blank" rel="noreferrer" className="hover:text-[#E64833] transition">
            <FaGithub />
          </a>
         
          
        </div>
      </div>
    </div>
  );
}
