const Contact = () => {
  return (
    <div className="min-h-screen bg-black-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl text-yellow font-semibold">Contact</h2>
          <p className="mt-4 max-w-2xl text-xl text-yellow-600 lg:mx-auto">
            Développeur Web Full Stack disponible pour vos projets
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="bg-black-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-yellow mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center text-yellow-600">
                  <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contact@raouan.dev" className="hover:text-yellow">
                    contact@raouan.dev
                  </a>
                </div>
                <div className="flex items-center text-yellow-600">
                  <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Tunis, Tunisie</span>
                </div>
                <div className="flex items-center text-yellow-600">
                  <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                  <a href="https://github.com/Raouane" target="_blank" rel="noopener noreferrer" className="hover:text-yellow">
                    github.com/Raouane
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-black-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-yellow mb-6">Envoyez-moi un message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-yellow-600 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-md bg-black-600 text-yellow-600 border border-yellow/20 focus:border-yellow focus:ring-1 focus:ring-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-yellow-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-md bg-black-600 text-yellow-600 border border-yellow/20 focus:border-yellow focus:ring-1 focus:ring-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-yellow-600 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-md bg-black-600 text-yellow-600 border border-yellow/20 focus:border-yellow focus:ring-1 focus:ring-yellow focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
