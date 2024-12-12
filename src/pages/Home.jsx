import { useState } from 'react';
import meccaBg from '../assets/mecca-bg.jpg';
import Appointment from '../components/Appointment';

const Home = () => {
  return (
    <div className="min-h-screen bg-black-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Section de rendez-vous en haut */}
        <div className="text-center mb-12">
          <Appointment />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow sm:text-5xl md:text-6xl">
            RAOUAN
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-yellow-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Développeur Web Full Stack | React.js | Node.js | MongoDB
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
                    href="https://monhajj2.netlify.app/"
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
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop')"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-600/90 to-black-600/40" />
                
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-yellow mb-4">
                    RentalCar - Plateforme de Location
                  </h3>
                  <p className="text-yellow-600 mb-6">
                    Système de location de voitures avec gestion des réservations, authentification et tableau de bord administrateur.
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
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop')"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-600/90 to-black-600/40" />
                
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-yellow mb-4">
                    Plantes en Ligne - E-commerce
                  </h3>
                  <p className="text-yellow-600 mb-6">
                    Boutique en ligne de plantes avec panier d'achat, paiement sécurisé et système de recommandations.
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

            {/* Projet 4 - Délice Sucrée */}
            <div className="pt-6">
              <div className="relative overflow-hidden rounded-lg shadow-xl h-[400px] group">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1887&auto=format&fit=crop')"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-600/90 to-black-600/40" />
                
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-yellow mb-4">
                    Délice Sucrée - Pâtisserie en Ligne
                  </h3>
                  <p className="text-yellow-600 mb-6">
                    Boutique en ligne de pâtisseries artisanales avec système de commande, panier d'achat et paiement sécurisé.
                  </p>
                  <a
                    href="https://delice-sucree2.netlify.app/cart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow hover:bg-yellow-600 transition-all duration-300 transform group-hover:scale-105"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>

            {/* Projet 5 - Cabinet d'Avocat */}
            <div className="pt-6">
              <div className="bg-[#2A2A2A] rounded-lg shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                {/* Image du projet */}
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
                    alt="Cabinet d'Avocat Preview" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-3">Cabinet d'Avocat</h3>
                  <p className="text-gray-300 mb-4">Site web professionnel pour un cabinet d'avocat, développé avec React et des technologies modernes.</p>
                  <a 
                    href="https://avocatv1.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Voir le site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section de rendez-vous en bas */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-yellow mb-6">Prêt à discuter de votre projet ?</h2>
          <Appointment />
        </div>
      </div>
    </div>
  );
};

export default Home;
