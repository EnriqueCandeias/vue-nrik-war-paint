<template>
  <div class="main mx-auto" style="padding: 30px;">
      <div class="container-text-outil-aos">
          <p>
          Organisez et suivez facilement votre collection de figurines avec notre outil de gestion dédié. Que vous soyez un collectionneur de Warhammer ou d'autres univers, vous pouvez répertorier vos figurines par armée, suivre vos acquisitions, et planifier vos prochaines additions. Gardez une vue d'ensemble de votre collection et assurez-vous de ne jamais acheter en double. Simplifiez la gestion de votre collection pour profiter pleinement de votre hobby.
          </p><br><br>
          <p>Veuillez cocher une ou plusieurs cases pour afficher les armées des jeux concernés :</p>
          <br>
          <div class="row mb-3">
          <div class="col-12">
              <div class="form-group d-flex justify-content-between gap-2">
                <label for="chk-40K" class="custom-checkbox">
                  <input type="checkbox" id="chk-40K" class="checkbox-input" value="40K" v-model="selectedGames" />
                  <span class="checkbox-custom"></span>
                    Warhammer 40K
                </label>
                <label for="chk-AOS" class="custom-checkbox">
                  <input type="checkbox" id="chk-AOS" class="checkbox-input" value="AOS" v-model="selectedGames" />
                  <span class="checkbox-custom"></span>
                    Warhammer AOS
                </label>
                <label for="chk-SDA" class="custom-checkbox">
                  <input type="checkbox" id="chk-SDA" class="checkbox-input" value="SDA" v-model="selectedGames" />
                  <span class="checkbox-custom"></span>
                    SDA
                </label>
              </div>
          </div>
          </div>
      </div>

      <div id="armyList" class="army-list-container">
          <div v-if="filteredArmies.length === 0" class="no-armies-message" style="color: white;">
              Vous n’avez sélectionné aucun jeu. Cochez une case pour afficher les armées du/des jeu(x) choisi(s).
          </div>
          <div v-for="army in filteredArmies" :key="army.name" class="army-card">
              <router-link :to="{ path: '/ArmyDetail', query: { name: army.name } }" class="army-link">
                  <img :src="army.image" :alt="army.name" class="army-image" />
                  <div class="army-info">
                      <span class="army-title">{{ army.name }}</span>
                  </div>
              </router-link>
          </div>
      </div>
  </div>
</template>
  
<script setup>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';

  const armies = ref([]);
  const selectedGames = ref([]);

  // Fonction pour charger les données depuis le fichier JSON
  const fetchArmies = async () => {
    try {
      const response = await axios.get('/armies.json');
      armies.value = response.data.armies;
    } catch (error) {
      console.error('Erreur lors du chargement des données des armées:', error);
    }
  };

  // Appel de la fonction de chargement au montage du composant
  onMounted(() => {
    fetchArmies();
  });

  // Filtrer les armées en fonction des jeux sélectionnés
  const filteredArmies = computed(() => {
    if (selectedGames.value.length === 0) {
      return [];
    }
    return armies.value.filter(army => selectedGames.value.includes(army.game));
  });
</script>
  
<style scoped>
    .container-text-outil-aos {
    margin: 50px 50px 20px 50px;
    padding: 15px;
    background-image: url('@/assets/Icone-image-etc/Vrac/concrete-wall-scratched-material-background-texture-concept.jpg');
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background-color: #8E5454;
    font-size: 25px;
    line-height: 1.2;
    border-radius: 20px;
    border: 8px solid #271d19;
    color: rgb(0, 0, 0);
    }

  .army-link {
  text-decoration: none; /* Enlève le soulignement des liens */
 }
  
  .card-img-top {
    height: 180px;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  
  .army-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px; /* Espacement entre les cartes */
    margin-bottom: 100px;
  }
  
  .army-card {
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: 4px solid #271d19;
    background: linear-gradient(to bottom, #666666 40%, #000000 100%); /* Gradient modernisé */
    color: rgb(254, 254, 254);
    margin: 10px;
    width: 200px; /* Largeur fixe pour les cartes */
    cursor: pointer;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); /* Ajoute une ombre autour des cartes */
    transition: transform 0.7s ease, border-color 0.5s ease; /* Ajout de transition pour le survol */
  }
  
  .army-card:hover {
    border-color: #000000; /* Couleur de bordure au survol */
    transform: scale(1.3); /* Agrandissement au survol */
    transition: all 0.3s ease;
  }
  
  .army-image {
    height: 150px;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  
  .army-info {
    padding: 10px;
    text-align: center;
  }
  
  .army-title {
    font-size: 16px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
  
  .form-group {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.form-group div {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .army-list-container {
    gap: 10px;
  }

  .army-card {
    width: 150px; /* Réduit la largeur des cartes sur les écrans plus petits */
  }

  .container-text {
    font-size: 18px; /* Réduit la taille de la police sur les écrans plus petits */
    padding: 15px;
  }
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  padding-left: 30px; /* Laissez de l'espace pour la nouvelle checkbox */
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  position: absolute;
  opacity: 0; /* Masquer la checkbox réelle */
  cursor: pointer;
}

.checkbox-custom {
  position: absolute;
  top: 0;
  left: 0;
  height: 27px;
  width: 27px;
  background-color: #d0c7c7; /* Couleur de fond de la checkbox */
  border-radius: 4px;
  border: 1px solid #000000;
}

.checkbox-input:checked + .checkbox-custom {
  background-color: #4CAF50; /* Couleur de fond lorsque sélectionné */
  border-color: #4CAF50;
}

.checkbox-custom::after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-input:checked + .checkbox-custom::after {
  display: block;
  left: 9px;
  top: 3px;
  width: 9px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

</style>
  