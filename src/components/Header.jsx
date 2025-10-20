import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        {/* Name / Title */}
        <h1 className="text-2xl font-bold tracking-wide">
          William Sephton
        </h1>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
