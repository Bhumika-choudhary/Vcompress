
import { useState } from "react";
import logo from "../assets/image 1.png"; // Update the path according to your project

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-linear-to-br from-[#DFE4FE] to-[#EDE1FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="VCompress"
            className="h-8 w-auto sm:h-10"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <a
            href="#"
            className="text-[12px] sm:text-[13px] font-semibold text-[#0F3DBF]"
          >
            Compress
          </a>

          <a
            href="#"
            className="text-[12px] sm:text-[13px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200"
          >
            Features
          </a>

          <a
            href="#"
            className="text-[12px] sm:text-[13px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200"
          >
            Pricing
          </a>

          <a
            href="#"
            className="text-[12px] sm:text-[13px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200"
          >
            API
          </a>

          <button className="ml-2 lg:ml-4 bg-[#0F3DBF] text-white text-[12px] sm:text-[13px] font-semibold px-4 sm:px-6 py-2 rounded-full hover:bg-[#0c34a0] transition-all duration-200">
            Compress Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-[#0F3DBF]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <a
              href="#"
              className="text-[14px] font-semibold text-[#0F3DBF] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Compress
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#0F3DBF] transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              API
            </a>

            <button className="mt-2 bg-[#0F3DBF] text-white text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-[#0c34a0] transition-all duration-200 w-full">
              Compress Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;