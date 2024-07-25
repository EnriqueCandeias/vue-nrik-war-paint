<template>
  <div class="full-width-container">
    <div class="container main body">
      <div class="container-text-lore">
        <h2>Résumé du lore de l’univers d’Age of Sigmar :</h2><br>
        <p>
          Du maelström d’un monde déchiqueté naquirent les Huit Royaumes. L’informe le disputa au divin dans une explosion de vie. D’étranges mondes naquirent dans le firmament, constellés d’esprits, de dieux et d’hommes. Le plus noble dieu était Sigmar. Une éternité durant, il illumina les royaumes, les baignant de son aura tandis qu’il façonnait son empire. Sa force était celle de la foudre et sa sagesse infinie. Mortels et immortels se prosternaient au pied de son trône. D’illustres empires s’élevèrent et pour un temps, toute trahison fut bannie. Sigmar régnait sur la terre comme au ciel, initiant un âge mythique et glorieux. <br><br>
          Mais le temps est cynique, et comme auguré, la belle alliance des dieux et des hommes se rompit. Mythes et légendes cédèrent au Chaos, et les ténèbres noyèrent les royaumes. L’âge d’or fit alors place à la torture, à l’esclavage et à la peur. Amer, Sigmar se détourna des mortels pour méditer sur les reliques du monde qu’il avait perdu jadis, en quête du moindre signe d’espoir. Enfin, dans la fièvre de la rage qui le consumait, il eut une sublime vision. Il imagina une arme née des cieux. Un fanal si flamboyant qu’il saurait percer les ténèbres. Une armée forgée à partir de tout ce qu’il avait perdu. Sigmar mit ses artisans au travail, et ils s’échinèrent pendant des éons à dompter le pouvoir des étoiles. Lorsque le grand œuvre de Sigmar fut sur le point d’être achevé, il porta à nouveau son attention vers les royaumes pour constater que le Chaos les avait presque totalement envahis. L’heure de la vengeance avait sonné. Le front ceint d’éclairs incandescents, il libéra enfin sa création. <br><br>
          Ainsi débuta l’Âge de Sigmar.
        </p>
      </div>

      <div class="container-text-lore">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="sublist">
              <h3>Factions de l’Ordre :</h3>
              <ul>
                <li v-for="(faction, key) in factions.order" :key="key">
                  <router-link :to="`/lore/factions/${key}`">{{ faction.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="sublist">
              <h3>Factions du Chaos :</h3>
              <ul>
                <li v-for="(faction, key) in factions.chaos" :key="key">
                  <router-link :to="`/lore/factions/${key}`">{{ faction.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="sublist">
              <h3>Factions de la Mort :</h3>
              <ul>
                <li v-for="(faction, key) in factions.death" :key="key">
                  <router-link :to="`/lore/factions/${key}`">{{ faction.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="sublist">
              <h3>Factions de la Destruction :</h3>
              <ul>
                <li v-for="(faction, key) in factions.destruction" :key="key">
                  <router-link :to="`/lore/factions/${key}`">{{ faction.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <img :src="sigmarImage" alt="Sigmar" class="img-fluid sigmar-main" style="border-radius: 20px; width: 600px;">
    </div>
  </div>
</template>
  
<script setup>
  
  // Structure des factions
  const factions = {
    order: {
      'cities-of-sigmar': { name: 'Cities of Sigmar' },
      'daughters-of-khaine': { name: 'Daughters of Khaine' },
      'fyreslayers': { name: 'Fyreslayers' },
      'idoneth-deepkin': { name: 'Idoneth Deepkin' },
      'kharadron-overlords': { name: 'Kharadron Overlords' },
      'lumineth-realm-lords': { name: 'Lumineth Realm-lords' },
      'seraphon': { name: 'Seraphon' },
      'stormcast-eternals': { name: 'Stormcast Eternals' },
      'sylvaneth': { name: 'Sylvaneth' },
    },
    chaos: {
      'beasts-of-chaos': { name: 'Beasts of Chaos' },
      'blades-of-khorne': { name: 'Blades of Khorne' },
      'disciples-of-tzeentch': { name: 'Disciples of Tzeentch' },
      'hedonites-of-slaanesh': { name: 'Hedonites of Slaanesh' },
      'maggotkin-of-nurgle': { name: 'Maggotkin of Nurgle' },
      'skaven': { name: 'Skaven' },
      'slaves-to-darkness': { name: 'Slaves to Darkness' },
    },
    death: {
      'flesh-eater-courts': { name: 'Flesh-eater Courts' },
      'nighthaunt': { name: 'Nighthaunt' },
      'ossiarch-bonereapers': { name: 'Ossiarch Bonereapers' },
      'soulblight-gravelords': { name: 'Soulblight Gravelords' },
    },
    destruction: {
      'gloomspite-gitz': { name: 'Gloomspite Gitz' },
      'ogor-mawtribes': { name: 'Ogor Mawtribes' },
      'orruk-warclans': { name: 'Orruk Warclans' },
      'sons-of-behemat': { name: 'Sons of Behemat' },
    },
  };

    const sigmarImage = new URL('@/assets/Icone-image-etc/Age of Sigmar/Illustration global age of sigmar/warhammer-age-of-sigmar-stormcast-eternals-lore-tactics-sigmar-holding-warhammer.webp', import.meta.url).href;
  
</script>
  
<style scoped>

.full-width-container {
  width: 100%;
  padding-top: 30px;
  background-image: url('@/assets/Icone-image-etc/Age of Sigmar/Illustration global age of sigmar/Age_Of_Sigmar_Banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; /* Pour que l'image de fond reste fixe lors du défilement */
    background-position: center;
}

.container {
    width: 100%;
    min-height: 100vh;
    padding-bottom: 80px;
    color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center; /* Centre le contenu horizontalement */
    justify-content: flex-start; /* Aligne le contenu en haut */
  }
  
.container-text-lore {
    background-image: url('@/assets/Icone-image-etc/Best.jpg');
    background-size: cover;        /* Couvre l'ensemble du conteneur */
    background-repeat: repeat;  /* Empêche la répétition de l'image */
    background-position: top;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 24px;
    padding: 8px;
    border-radius: 20px;
    border: 8px solid #271d19;
    color: rgb(0, 0, 0);
    margin-bottom: 10px;
    max-width: 100%; /* Limite la largeur du conteneur à 100% de la largeur du parent */
    overflow: hidden; /* Masque le contenu qui dépasse du conteneur */
}

.container-text-lore li {
    color: #681212; /* Couleur du texte des éléments de liste */
}

.container-text-lore a {
    color: #000000; /* Couleur des liens */
    text-decoration: none; /* Retire le soulignement des liens */
}

.container-text-lore a:hover {
    text-decoration: underline; /* Ajoute un soulignement au survol des liens */
}

@media (max-width: 766px) {
    .container-text-lore {
        background-image: url('@/assets/Icone-image-etc/Best.jpg'); /* Changer l'image de fond pour les petits écrans */
        background-size: contain; /* Ajuster la taille de l'image de fond */
        background-position: center; /* Centrer l'image de fond */
        font-size: 20px; /* Ajuster la taille de la police si nécessaire */
        line-height: 22px; /* Ajuster la hauteur de ligne si nécessaire */
    }
}

.sigmar-main {
    display: block;
    margin: 0 auto; /* Centre l'image horizontalement */
    margin-bottom: 10px;
    max-width: 70%
}

.container {
    padding-bottom: 80px;
}


</style>
  