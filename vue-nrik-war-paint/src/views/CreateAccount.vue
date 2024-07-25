<template>

    <div class="container mt-4">
        <div class="container-text">
            <h3 style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 24; color:aliceblue;">Créer un compte</h3><br>
            <p style="font-family: Arial, Helvetica, sans-serif; font-weight: 500; color:aliceblue; padding: 10px">Vous avez déjà un compte ? Excellent ! <router-link to="/Login" class="nav-link signup-link mx-0">Connectez-vous ici :</router-link></p>
        </div>
        
        <div class="container-text">
            <div class="form-containerm d-flex justify-content-center">
                <div class="form-content">
                        <form>
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="email" class="form-label small fw-normal font-normal">Adresse e-mail</label>
                                    <input type="email" class="form-control" id="email" placeholder="">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label small fw-normal font-normal">Choisissez un mot de passe robuste</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" id="password" placeholder="">
                                    <button class="btn btn-outline-secondary btn-outline-dark" type="button" id="togglePassword1"><i class="far fa-eye" style="color: #000000; "></i></button>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label small fw-normal font-normal">Confirmez le mot de passe</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" id="confirmPassword" placeholder="">
                                    <button class="btn btn-outline-secondary btn-outline-dark" type="button" id="togglePassword2"><i class="far fa-eye" style="color: #000000;"></i></button>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="firstName" class="form-label small fw-normal font-normal">Prénom</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="">
                                </div>
                                <div class="col">
                                    <label for="lastName" class="form-label small fw-normal font-normal">Nom</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label small fw-normal font-normal">Date de naissance</label>
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Journée">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Mois">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Année">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="terms">
                                <label class="form-check-label small fw-normal font-normal" for="terms">
                                    J'ai lu et j'approuve les termes et conditions
                                </label>
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="newsletter">
                                <label class="form-check-label small fw-normal font-normal" for="newsletter">
                                    Je voudrais m'abonner à la newsletter Nrik War Paint
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary" style="background-color: #4BAA34; border: none;">Continuer</button>
                        </form>
                    </div>
                </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

.container {
    padding: 30px;
    margin-bottom: 60px;
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
    margin-bottom: 10px;
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