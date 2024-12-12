const About = () => {
  return (
    <div className="min-h-screen bg-black py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow">
            À Propos de Moi
          </h1>
          <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg text-yellow-600 px-4">
            Développeuse Full Stack passionnée par la création d'applications web modernes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Image section - Made taller on mobile */}
          <div className="relative h-56 sm:h-64 md:h-72 lg:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-none mx-auto w-full max-w-2xl lg:max-w-none">
            <div 
              className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop')"
              }}
            />
            <div className="absolute inset-0 bg-black-600/50" />
          </div>

          {/* Content section */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-none">
            <div className="bg-black-600/80 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow mb-3 sm:mb-4">Compétences Techniques</h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <h3 className="text-yellow-600 font-semibold mb-2 text-base sm:text-lg">Frontend</h3>
                  <ul className="text-yellow-600/80 space-y-2 text-sm sm:text-base">
                    <li className="flex items-center">
                      <span className="mr-2">▹</span>React.js
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">▹</span>Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">▹</span>JavaScript (ES6+)
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">▹</span>HTML5/CSS3
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-600 font-semibold mb-2 text-base sm:text-lg">Backend</h3>
                  <ul className="text-yellow-600/80 space-y-2 text-sm sm:text-base">
                    <li className="flex items-center">
                      <span className="mr-2">▹</span>Node.js
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">▹</span>Express.js
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">▹</span>MongoDB
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">▹</span>Firebase
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black-600/80 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow mb-3 sm:mb-4">Expérience</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-yellow-600 font-semibold text-base sm:text-lg mb-2">Développeuse Full Stack</h3>
                  <p className="text-yellow-600/80 text-sm sm:text-base leading-relaxed">
                    Spécialisée dans le développement d'applications web modernes et performantes.
                    Expérience dans la création de solutions e-commerce et de systèmes de réservation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black-600/80 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow mb-3 sm:mb-4">Formation</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-yellow-600 font-semibold text-base sm:text-lg mb-2">Développement Web Full Stack</h3>
                  <p className="text-yellow-600/80 text-sm sm:text-base leading-relaxed">
                    Formation intensive en développement web avec spécialisation
                    en technologies modernes comme React.js et Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
