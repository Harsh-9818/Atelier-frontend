import { useState, useEffect, useRef } from 'react';
import '/src/App.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the dropdown menu

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-lg text-white h-16 w-full py-4 px-4 md:px-24 flex items-center justify-between sticky top-0 z-10">
      <Link to="/" className="font-bold text-2xl">
        Atelier
      </Link>

      {/* Centered Links (Hidden on smaller screens, visible on medium and larger) */}
      <div className="hidden md:flex flex-1 justify-left pl-20 text-gray-400 gap-10 text-sm font-base ">
        <Link to="about">About</Link>
        <Link to="services">Our Services</Link>
        <Link to="components">Components</Link>
        <Link to="socials">Socials</Link>
      </div>

      {/* Hamburger Menu (Visible on smaller screens) */}
      <div
        className="md:hidden flex flex-col items-end gap-1 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle dropdown menu
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Right-aligned Button (Hidden on smaller screens) */}
      <div className="hidden md:flex bg-cyan-300 h-9 w-32 rounded-3xl items-center justify-center flex-shrink-0">
        <Link to="work" className="font-bold text-black text-xs">
          WORK WITH US
        </Link>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Attach ref to the dropdown menu
          className="absolute top-16 right-4 bg-gray-800 w-48 rounded-lg shadow-lg z-20 flex flex-col text-sm font-semibold"
        >
          <Link
            to="about"
            className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
            onClick={() => setIsMenuOpen(false)} // Close dropdown on click
          >
            About
          </Link>
          <Link
            to="services"
            className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Services
          </Link>
          <Link
            to="work"
            className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Components
          </Link>
          <Link
            to="work"
            className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Socials
          </Link>

          <Link
            to="work"
            className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}

    </div>
  );
}

export default Header;
