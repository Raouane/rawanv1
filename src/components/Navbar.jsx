import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black-600 shadow-lg border-b border-yellow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-yellow text-2xl font-bold">
                RAWAN
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="text-yellow hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-yellow hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="text-yellow hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/login"
              className="bg-yellow hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-md text-sm transition-colors duration-200"
            >
              Connexion
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow hover:text-yellow-600 hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-black-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-yellow hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className="text-yellow hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className="text-yellow hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
