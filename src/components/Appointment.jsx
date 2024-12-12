import { useState } from 'react';

const Appointment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer les données
    console.log('Rendez-vous demandé:', formData);
    setIsOpen(false);
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      subject: '',
      message: ''
    });
    alert('Votre demande de rendez-vous a été envoyée !');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Obtenir la date minimum (aujourd'hui)
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow hover:bg-yellow-600 transition-all duration-300"
      >
        Prendre un rendez-vous
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full my-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-yellow">Prendre un rendez-vous</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-yellow hover:text-yellow-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-yellow">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-yellow-600 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 h-12 px-4"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-yellow">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-yellow-600 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 h-12 px-4"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-yellow">
                  Date
                </label>
                <div 
                  className="relative cursor-pointer"
                  onClick={() => document.getElementById('date').showPicker()}
                >
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-yellow-600 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 h-12 px-4 cursor-pointer appearance-none"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-yellow">
                  Heure
                </label>
                <div 
                  className="relative cursor-pointer"
                  onClick={() => document.getElementById('time').showPicker()}
                >
                  <input
                    type="time"
                    name="time"
                    id="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-yellow-600 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 h-12 px-4 cursor-pointer appearance-none"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-yellow">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-yellow-600 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 h-12 px-4"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-yellow">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-yellow-600 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-4"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-gray-600 rounded-md text-yellow hover:bg-gray-800"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md text-black bg-yellow hover:bg-yellow-600"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Appointment;
