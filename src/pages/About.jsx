const About = () => {
  return (
    <div className="min-h-screen bg-black-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl text-yellow font-semibold">À propos de moi</h2>
          <p className="mt-4 max-w-2xl text-xl text-yellow-600 lg:mx-auto">
            Développeur Web Full Stack passionné par la création d'applications web modernes et performantes.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Compétences */}
            <div className="bg-black-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-yellow mb-4">Compétences Techniques</h3>
              <ul className="space-y-2 text-yellow-600">
                <li>• React.js & Next.js</li>
                <li>• Node.js & Express</li>
                <li>• MongoDB & MySQL</li>
                <li>• Tailwind CSS & SASS</li>
                <li>• Git & GitHub</li>
                <li>• REST APIs & GraphQL</li>
              </ul>
            </div>

            {/* Expérience */}
            <div className="bg-black-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-yellow mb-4">Expérience</h3>
              <div className="space-y-4 text-yellow-600">
                <div>
                  <h4 className="font-medium">Développeur Full Stack Freelance</h4>
                  <p className="text-sm">2022 - Présent</p>
                  <p className="mt-2">Développement d'applications web sur mesure pour divers clients.</p>
                </div>
                <div>
                  <h4 className="font-medium">Développeur Frontend</h4>
                  <p className="text-sm">2021 - 2022</p>
                  <p className="mt-2">Création d'interfaces utilisateur réactives et modernes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formation */}
        <div className="mt-10">
          <div className="bg-black-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-yellow mb-4">Formation</h3>
            <div className="space-y-4 text-yellow-600">
              <div>
                <h4 className="font-medium">Master en Développement Web</h4>
                <p className="text-sm">2020 - 2022</p>
                <p className="mt-2">Spécialisation en développement web full stack et architecture logicielle.</p>
              </div>
              <div>
                <h4 className="font-medium">Licence en Informatique</h4>
                <p className="text-sm">2017 - 2020</p>
                <p className="mt-2">Formation complète en programmation et concepts informatiques.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
