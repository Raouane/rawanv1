import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const ThankYou = () => {
  const location = useLocation();
  const appointmentData = location.state?.appointmentData;

  useEffect(() => {
    // Simuler l'envoi d'un email de confirmation
    if (appointmentData) {
      console.log('Email de confirmation envoyé à:', appointmentData.email);
    }
  }, [appointmentData]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-yellow bg-opacity-10 mb-6">
            <svg
              className="h-10 w-10 text-yellow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-yellow">
            Merci pour votre demande de rendez-vous !
          </h2>
          <p className="mt-2 text-yellow-600">
            Un email de confirmation a été envoyé à votre adresse.
          </p>
        </div>

        {appointmentData && (
          <div className="mt-8 space-y-4 text-yellow-600">
            <h3 className="text-xl font-medium text-yellow">Détails du rendez-vous :</h3>
            <div className="bg-gray-800 rounded-lg p-6 space-y-3">
              <p><span className="font-medium">Nom :</span> {appointmentData.name}</p>
              <p><span className="font-medium">Email :</span> {appointmentData.email}</p>
              <p><span className="font-medium">Date :</span> {formatDate(appointmentData.date)}</p>
              <p><span className="font-medium">Heure :</span> {appointmentData.time}</p>
              <p><span className="font-medium">Sujet :</span> {appointmentData.subject}</p>
              <p><span className="font-medium">Message :</span></p>
              <p className="whitespace-pre-wrap">{appointmentData.message}</p>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow hover:bg-yellow-600 transition-all duration-300"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
