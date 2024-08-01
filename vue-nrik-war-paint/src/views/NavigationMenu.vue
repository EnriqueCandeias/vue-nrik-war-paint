<template>
    <main class="container">
      <div class="btn-group-vertical" style="text-align: center; display: flex; align-items: center; flex-direction: column;">
        <router-link class="btn btn-sm" to="/">Accueil</router-link>
        <router-link class="btn btn-sm" to="/personal-gallery">Galerie photo</router-link>
        <router-link class="btn btn-sm" to="/ArmySection">Mes armées</router-link>
        <router-link class="btn btn-sm" to="/LoreSection">Lore des Univers</router-link>
        <router-link class="btn btn-sm" to="/Login">S'identifier</router-link>
      </div>
    </main>
  </template>
  
<script setup>

</script>
  
<style scoped>

/* Style pour le groupe de boutons */
.btn-group-vertical {
  font-family: 'CaveatBrush', cursive;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espacement entre les boutons */
  align-items: center; /* Centre les boutons horizontalement */
  padding: 0; /* Retire le padding autour du conteneur */
}

.btn {
  display: inline-block;
  font-size: 2rem; /* Taille du texte */
  text-align: center;
  color: #000000; /* Couleur du texte */
  border: none; /* Supprime le bord du bouton */
  outline: none; /* Supprime le contour autour du bouton */
  background-color: transparent; /* Assure que le bouton n'a pas de fond */
  cursor: pointer; /* Change le curseur au survol */
}

/* Effet de survol du texte */
.btn:hover {
  color: #ffffff; /* Couleur du texte lors du survol */
}

</style>