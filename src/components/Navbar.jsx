import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Remplacer l'import de l'image locale
const profilePic = "https://i.imgur.com/ASDbaLa.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Effet pour fermer le menu lors du changement de route
  useState(() => {
    closeMenu();
  }, [location.pathname]);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={closeMenu}
      className="text-yellow hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </Link>
  );

  const MobileNavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={closeMenu}
      className="text-yellow hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-black-600 shadow-lg border-b border-yellow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-4">
              <img
                src={profilePic}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border-2 border-yellow"
              />
              <Link to="/" onClick={closeMenu} className="text-yellow text-2xl font-bold">
                RAOUAN
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/about">À propos</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
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
          <MobileNavLink to="/">Accueil</MobileNavLink>
          <MobileNavLink to="/about">À propos</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
