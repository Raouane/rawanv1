const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-black-600/80 p-6 sm:p-8 rounded-lg shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl sm:text-4xl font-bold text-yellow">
            Connexion Admin
          </h2>
          <p className="mt-2 text-center text-base sm:text-lg text-yellow/80">
            Accédez à votre espace d'administration
          </p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 text-black-600 placeholder-black-500/50 bg-yellow/90 focus:outline-none focus:ring-2 focus:ring-yellow focus:z-10 text-base sm:text-lg"
                placeholder="Adresse email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 text-black-600 placeholder-black-500/50 bg-yellow/90 focus:outline-none focus:ring-2 focus:ring-yellow focus:z-10 text-base sm:text-lg"
                placeholder="Mot de passe"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 sm:py-3 px-4 text-base sm:text-lg font-bold rounded-md text-black-600 bg-yellow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow transition-all duration-300"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
