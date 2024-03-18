import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <h1>Bienvenue au Lisieux Club Futsal</h1>
        <div className="login__content__buttons">
          <button className="login__content__buttons__loginBtn">Login</button>
          <button className="login__content__buttons__createBtn">
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
