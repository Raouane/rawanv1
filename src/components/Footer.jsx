const Footer = () => {
  return (
    <footer className="bg-black-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-yellow text-lg font-bold mb-4">RAWAN</h3>
            <p className="text-yellow-600">
              Votre solution d'administration moderne et efficace
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-yellow-600 hover:text-yellow">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/about" className="text-yellow-600 hover:text-yellow">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-yellow-600 hover:text-yellow">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-yellow-600">
                <span className="mr-2">📍</span> Tunis, Tunisie
              </li>
              <li className="text-yellow-600">
                <span className="mr-2">📧</span> contact@rawan.com
              </li>
              <li className="text-yellow-600">
                <span className="mr-2">📱</span> +216 XX XXX XXX
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-yellow/20">
          <p className="text-center text-yellow-600">
            © {new Date().getFullYear()} RAWAN. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
