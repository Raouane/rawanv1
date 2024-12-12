const About = () => {
  return (
    <div className="min-h-screen bg-black py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow">
            À Propos de Moi
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-yellow-600">
            Développeuse Full Stack passionnée par la création d'applications web modernes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Image section */}
          <div className="relative h-48 sm:h-64 md:h-full rounded-lg overflow-hidden shadow-xl order-1 md:order-none">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop')"
              }}
            />
            <div className="absolute inset-0 bg-black-600/50" />
          </div>

          {/* Content section */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-none">
            <div className="bg-black-600/80 p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow mb-3 sm:mb-4">Compétences Techniques</h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <h3 className="text-yellow-600 font-semibold mb-2">Frontend</h3>
                  <ul className="text-yellow-600/80 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5/CSS3</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-600 font-semibold mb-2">Backend</h3>
                  <ul className="text-yellow-600/80 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black-600/80 p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow mb-3 sm:mb-4">Expérience</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-yellow-600 font-semibold text-base sm:text-lg">Développeuse Full Stack</h3>
                  <p className="text-yellow-600/80 text-sm sm:text-base">
                    Spécialisée dans le développement d'applications web modernes et performantes.
                    Expérience dans la création de solutions e-commerce et de systèmes de réservation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black-600/80 p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow mb-3 sm:mb-4">Formation</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-yellow-600 font-semibold text-base sm:text-lg">Développement Web Full Stack</h3>
                  <p className="text-yellow-600/80 text-sm sm:text-base">
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
