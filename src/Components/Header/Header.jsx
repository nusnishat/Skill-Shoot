import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const linkClass = (link) =>
    link === activeLink ? 'text-white' : 'text-white opacity-60';

  return (
    <header className="bg-custom-green text-white py-6 text-lg">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        {/* Website Name */}
        <div className="font-bold text-2xl">
          Skill <span className='text-custom-coral'>Shoot</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <a
            href="#home"
            className={`${linkClass('#home')}`}
            onClick={() => handleLinkClick('#home')}
          >
            Home
          </a>
          <a
            href="#course"
            className={`${linkClass('#course')}`}
            onClick={() => handleLinkClick('#course')}
          >
            Course
          </a>
          <a
            href="#subscribe"
            className={`${linkClass('#subscribe')}`}
            onClick={() => handleLinkClick('#subscribe')}
          >
            Subscribe
          </a>
          <a
            href="#about"
            className={`${linkClass('#about')}`}
            onClick={() => handleLinkClick('#about')}
          >
            About
          </a>
          <a
            href="#testimoni"
            className={`${linkClass('#testimoni')}`}
            onClick={() => handleLinkClick('#testimoni')}
          >
            Testimoni
          </a>
        </nav>

        {/* Login & Register Buttons */}
        <div className="hidden lg:flex space-x-4">
          <a href="/login" className=" px-2 py-2">
            Login
          </a>
          <button className="bg-custom-coral text-white px-8 py-2 rounded">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col items-center space-y-4 mt-4">
            <a
              href="#home"
              className={`${linkClass('#home')}`}
              onClick={() => {
                handleLinkClick('#home');
                toggleMobileMenu();
              }}
            >
              Home
            </a>
            <a
              href="#course"
              className={`${linkClass('#course')}`}
              onClick={() => {
                handleLinkClick('#course');
                toggleMobileMenu();
              }}
            >
              Course
            </a>
            <a
              href="#subscribe"
              className={`${linkClass('#subscribe')}`}
              onClick={() => {
                handleLinkClick('#subscribe');
                toggleMobileMenu();
              }}
            >
              Subscribe
            </a>
            <a
              href="#about"
              className={`${linkClass('#about')}`}
              onClick={() => {
                handleLinkClick('#about');
                toggleMobileMenu();
              }}
            >
              About
            </a>
            <a
              href="#testimoni"
              className={`${linkClass('#testimoni')}`}
              onClick={() => {
                handleLinkClick('#testimoni');
                toggleMobileMenu();
              }}
            >
              Testimoni
            </a>
            <a href="/login" className=" px-2 py-2">
                Login
            </a>
            <button className="bg-custom-coral text-white px-4 py-2 rounded">
                Register
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
