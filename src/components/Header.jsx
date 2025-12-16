"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-transform hover:scale-105 duration-300"
          >
            <Image 
                src="/logo.jpg" 
              alt="Smokehouse BBQ" 
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-amber-500 shadow-lg object-cover"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/food"
              className="px-4 lg:px-6 py-2 lg:py-3 text-white font-semibold text-base lg:text-lg rounded-lg hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Food
            </Link>
            <Link
              href="/sells"
              className="px-4 lg:px-6 py-2 lg:py-3 text-white font-semibold text-base lg:text-lg rounded-lg hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Sells
            </Link>
            <Link
              href="/review"
              className="px-4 lg:px-6 py-2 lg:py-3 text-white font-semibold text-base lg:text-lg rounded-lg hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Review
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-stone-700 hover:bg-stone-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-2 border-t border-stone-700">
            <Link
              href="/food"
              className="px-4 py-3 text-white font-semibold text-base rounded-lg hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              🍽️ Food
            </Link>
            <Link
              href="/sells"
              className="px-4 py-3 text-white font-semibold text-base rounded-lg hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              💰 Sells
            </Link>
            <Link
              href="/review"
              className="px-4 py-3 text-white font-semibold text-base rounded-lg hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              ⭐ Review
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
