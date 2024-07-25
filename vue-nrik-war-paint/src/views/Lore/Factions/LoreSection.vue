<template>

    <div class="lore-section">
      <div class="container-text">
        <p>
          Bienvenue dans la section Lore de notre site, dédiée aux récits épiques et aux légendes des univers de Warhammer 40,000, Age of Sigmar, et Le Seigneur des Anneaux.
          Plongez au cœur de l'histoire riche et complexe de ces mondes fascinants, où la guerre, la magie et l'héroïsme s'entrelacent pour créer des sagas inoubliables.
          Découvrez les origines des grandes factions, les batailles légendaires, et les personnages emblématiques qui peuplent ces univers.
          Que vous soyez un novice curieux ou un vétéran passionné, laissez-vous emporter par les récits captivants qui donnent vie à vos figurines préférées.
        </p>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 mb-3">
            <div class="button-lore text-center">
              <router-link to="/lore/age-of-sigmar">
                <img :src="ageOfSigmarImg" alt="Warhammer - Age of Sigmar">
                <p style="color: aliceblue; font-size: 24px">Lore <br> Warhammer Age of Sigmar</p>
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="button-lore text-center">
              <router-link to="/lore/warhammer40k">
                <img :src="warhammer40000Img" alt="Warhammer 40 000">
                <p style="color: aliceblue; font-size: 24px">Lore <br>Warhammer 40 000</p>
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="button-lore text-center">
              <router-link to="/lore/lord-of-the-rings">
                <img :src="seigneurDesAnneauxImg" alt="Le seigneur des anneaux">
                <p style="color: aliceblue; font-size: 24px">Lore <br>Le seigneur des anneaux</p>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </div>


</template>
  
  <script setup>

  const loreLinks = {
    ageOfSigmar: '/lore/age-of-sigmar',
  seigneurDesAnneaux: '/lore/lord-of-the-rings',
  warhammer40000: '/lore/warhammer40k',
  };
  
  import ageOfSigmarImg from '@/assets/Icone-image-etc/Age of Sigmar/Illustration global age of sigmar/ageofsigmarlore.jpg';
  import seigneurDesAnneauxImg from '@/assets/Icone-image-etc/Vrac/seigneurdesanneauxlore.jpg';
  import warhammer40000Img from '@/assets/Icone-image-etc/Vrac/warhammer40000lore.jpg';
  </script>
  
  <style scoped>
  .lore-section {
    padding: 20px;
    background-color: #AB5454;
    color: aliceblue;
    padding-bottom: 100px;
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
    margin-bottom: 20px;
  }
  
  .button-lore {
    background: #666666;
    background: -moz-linear-gradient(top, #666666 75%, #000000 100%);
    background: -webkit-linear-gradient(top, #666666 75%, #000000 100%);
    background: linear-gradient(to bottom, #666666 75%, #000000 100%);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .button-lore img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
  
  .button-lore p {
    margin: 10px;
    color: aliceblue;
    font-size: 24px; /* Taille du texte pour correspondre avec vos spécifications */
  }
  
  .button-lore a {
    text-decoration: none;
  }
  </style>
  