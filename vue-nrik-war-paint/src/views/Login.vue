<template>
    <div class="container mt-4">
      <div class="container-text">
        <h3 class="header-text">Se connecter</h3><br>
        <p class="info-text">
          Vous n'avez pas encore de compte ? Pas de souci,
          <router-link to="/CreateAccount" class="nav-link mx-0 signup-link">vous pouvez en créer un tout de suite !</router-link>
          <br><br>Vous avez déjà un compte ? <br><br> Connectez-vous ici :
        </p>
      </div>
  
      <div class="container-text">
        <div class="form-container d-flex justify-content-center">
          <div class="form-content">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Adresse e-mail</label>
                <input type="email" class="form-control custom-input" id="email" placeholder="">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control custom-input" id="password" placeholder="">
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="text-decoration-none">Mot de passe oublié ?</a>
                <button type="submit" class="btn btn-primary submit-button">Connexion</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No script needed for static content
  </script>
  
  <style scoped>
  
  .container {
    padding: 30px;
  }
  
  .container-text {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background-color: #8E5454;
    font-size: 20px;
    line-height: 24px;
    padding: 8px;
    border-radius: 20px;
    color: rgb(255, 255, 255);
    margin-bottom: 30px;
  }
  
  .header-text {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: aliceblue;
  }
  
  .info-text {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: aliceblue;
  }
  
  .signup-link {
    color: #4BAA34;
    font-weight: bold;
    font-style: italic;
    text-decoration: underline;
  }
  
  /* Style pour les champs d'entrée */
  .custom-input {
    width: 100%; /* Ajustez cette largeur selon vos besoins */
    max-width: 400px; /* Largeur maximale du champ */
  }
  
  /* Style pour le conteneur du formulaire */
  .form-container {
    display: flex;
    justify-content: center;
  }
  
  /* Style pour le contenu du formulaire */
  .form-content {
    width: 100%;
    max-width: 300px; /* Ajustez la largeur maximale selon vos besoins */
  }
  
  /* Style pour le bouton de soumission */
  .submit-button {
    background-color: #4BAA34;
    border: none;
  }
  </style>
  