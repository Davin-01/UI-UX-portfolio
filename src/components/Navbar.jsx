import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#2C3E50]">
        Moenga David
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-[#2C3E50] font-medium">
          <Link to="/" className="hover:text-[#E64833]">Home</Link>
          <Link to="/projects" className="hover:text-[#E64833]">Projects</Link>
          <Link to="/about" className="hover:text-[#E64833]">About</Link>
          <Link to="/contact" className="hover:text-[#E64833]">Contact</Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#2C3E50] focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-[#2C3E50] font-medium">
          <Link to="/" className="block hover:text-[#E64833]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" className="block hover:text-[#E64833]" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/about" className="block hover:text-[#E64833]" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-[#E64833]" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
