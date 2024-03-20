import React, { useState } from "react";
import Loader from "../loader/Loader"; // Import du composant Loader

const Login = () => {
  const [loading, setLoading] = useState(false); // État pour gérer l'affichage du loader
  const [loginData, setLoginData] = useState({ username: "", password: "" }); // État pour stocker les données de connexion
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    username: "",
  }); // État pour stocker les données de création de compte
  const [showLoginModal, setShowLoginModal] = useState(false); // État pour afficher le modal de connexion
  const [showSignupModal, setShowSignupModal] = useState(false); // État pour afficher le modal de création de compte

  // Fonction pour gérer les changements dans le formulaire de connexion
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Fonction pour gérer les changements dans le formulaire de création de compte
  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Ici, vous pouvez ajouter votre logique de connexion
  };

  // Fonction pour gérer la soumission du formulaire de création de compte
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Ici, vous pouvez ajouter votre logique de création de compte
  };

  return (
    <div className="login">
      {/* Affichage du loader si loading est true */}
      {loading ? (
        <Loader />
      ) : (
        // Affichage des boutons de connexion et de création de compte si loading est false
        <div className="login__content">
          <h1>LCF EN LIVE !</h1>
          <div className="login__content__buttons">
            {/* Bouton pour ouvrir le modal de connexion */}
            <button
              className="login__content__buttons__loginBtn"
              onClick={() => setShowLoginModal(true)}
            >
              LOGIN
            </button>

            {/* Bouton pour ouvrir le modal de création de compte */}
            <button
              className="login__content__buttons__createBtn"
              onClick={() => setShowSignupModal(true)}
            >
              CRÉER UN COMPTE
            </button>
          </div>
        </div>
      )}

      {/* Modal de connexion */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLoginModal(false)}>
              &times;
            </span>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Pseudo"
                value={loginData.username}
                onChange={handleLoginInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={loginData.password}
                onChange={handleLoginInputChange}
              />
              <button type="submit">LOGIN</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal de création de compte */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignupModal(false)}>
              &times;
            </span>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Adresse e-mail"
                value={signupData.email}
                onChange={handleSignupInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={signupData.password}
                onChange={handleSignupInputChange}
              />
              <input
                type="text"
                name="username"
                placeholder="Pseudo"
                value={signupData.username}
                onChange={handleSignupInputChange}
              />
              <button type="submit">CRÉER UN COMPTE</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
