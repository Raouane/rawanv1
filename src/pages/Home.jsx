import meccaBg from '../assets/mecca-bg.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow sm:text-5xl md:text-6xl">
            RAWAN
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-yellow-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Développeuse Web Full Stack | React.js | Node.js | MongoDB
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Projet 1 - MonHajj */}
            <div className="pt-6">
              <div className="relative overflow-hidden rounded-lg shadow-xl h-[400px] group">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop')"
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-600/90 to-black-600/40" />
                
                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-yellow mb-4">
                    MonHajj - Application Web
                  </h3>
                  <p className="text-yellow-600 mb-6">
                    Application de réservation développée avec React.js, Node.js et MongoDB. Interface moderne et responsive avec Tailwind CSS.
                  </p>
                  <a
                    href="https://monhajj2.netlify.app/booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow hover:bg-yellow-600 transition-all duration-300 transform group-hover:scale-105"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>

            {/* Projet 2 - RentalCar */}
            <div className="pt-6">
              <div className="relative overflow-hidden rounded-lg shadow-xl h-[400px] group">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')"
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-600/90 to-black-600/40" />
                
                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-yellow mb-4">
                    RentalCar - Plateforme de Location
                  </h3>
                  <p className="text-yellow-600 mb-6">
                    Application full-stack avec authentification JWT, paiement Stripe et système de réservation en temps réel.
                  </p>
                  <a
                    href="https://rentalcaar.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow hover:bg-yellow-600 transition-all duration-300 transform group-hover:scale-105"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>

            {/* Projet 3 - Plantes en Ligne */}
            <div className="pt-6">
              <div className="relative overflow-hidden rounded-lg shadow-xl h-[400px] group">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop')"
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-600/90 to-black-600/40" />
                
                {/* Contenu */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-yellow mb-4">
                    Plantes en Ligne - E-commerce
                  </h3>
                  <p className="text-yellow-600 mb-6">
                    Site e-commerce avec panier d'achat, gestion des stocks et interface d'administration. Développé avec React et Firebase.
                  </p>
                  <a
                    href="https://plantesenligne.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow hover:bg-yellow-600 transition-all duration-300 transform group-hover:scale-105"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
