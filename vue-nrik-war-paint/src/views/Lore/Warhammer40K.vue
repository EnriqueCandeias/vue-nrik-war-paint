<template>
  <div class="full-width-container">
    <div class="container">
      <div class="container-text-lore">
        <h2>Résumé du lore de l’univers de Warhammer 40 000 :</h2><br>
        <p>
          Warhammer 40,000, également connu sous le nom de Warhammer 40K, est un univers de science-fiction sombre et dystopique créé par Games Workshop. Plongé dans une ère appelée "l'Ère de l'Imperium", cet univers fictif se déroule à travers une galaxie immense et tourmentée par la guerre, la corruption et des horreurs indescriptibles. <br><br>
          Au cœur de cet univers se trouve l'humanité, dirigée par l'Empereur immortel, un être psychiquement puissant et stratégiquement brillant, qui est assis sur le Trône d'Or sur Terra (anciennement la Terre). L'Empereur a fondé l'Imperium de l'Humanité, un régime totalitaire et théocratique qui vise à unifier l'humanité sous son autorité et à éradiquer toute forme de dissidence ou de rébellion. <br><br>
          Cependant, l'Imperium est confronté à une multitude de menaces. Les guerres incessantes contre les races xenos hostiles, comme les Orks belliqueux, les Eldars énigmatiques et les Tyranides dévorants, mettent continuellement à l'épreuve les ressources et la volonté de l'humanité. De plus, les forces corrompues du Chaos, des entités démoniaques issues du Warp (une dimension cauchemardesque d'énergie psychique), complotent pour détruire l'Imperium de l'intérieur et corrompre ses âmes. <br><br>
          La technologie avancée coexiste avec des pratiques mystiques, où les adeptes de l'Adeptus Mechanicus vénèrent la machine comme une divinité, et où les pouvoirs psychiques sont utilisés pour prédire l'avenir, invoquer des tempêtes de feu ou manipuler la réalité elle-même. Les planètes sont ravagées par la guerre, les cités fortifiées sont entourées de champs de bataille dévastés, et l'obscurité règne sur des milliards d'âmes vivant sous un régime autoritaire et oppressif. <br><br>
          L'univers de Warhammer 40K est un tableau complexe de moralités grises, où même les héros sont souvent des anti-héros et où les décisions désespérées et les sacrifices brutaux sont monnaie courante. C'est un univers où la survie de l'humanité est constamment en jeu, où la grandeur coexiste avec la désolation, et où chaque victoire est souvent temporaire face à des menaces immortelles et insidieuses.
        </p>
      </div>

      <div class="container-text-lore">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="sublist">
              <h3>Space Marines :</h3>
              <ul>
                <li v-for="(faction, key) in factions.spaceMarines" :key="key">
                  <router-link :to="`/lore/factions/${key}`">{{ faction.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="sublist">
              <h3>Armées de l'Impérium :</h3>
              <ul>
                <li v-for="(faction, key) in factions.imperium" :key="key">
                  <router-link :to="`/lore/factions/${key}`">{{ faction.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="sublist">
              <h3>Armées du Chaos :</h3>
              <ul>
                <li v-for="(faction, key) in factions.chaos" :key="key">
                  <router-link :to="`/lore/factions/${key}`">{{ faction.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="sublist">
              <h3>Armées Xenos :</h3>
              <ul>
                <li v-for="(faction, key) in factions.xenos" :key="key">
                  <router-link :to="`/lore/factions/${key}`">{{ faction.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Structure des factions
  const factions = {
    spaceMarines: {
      'black-templars': { name: 'Black Templars' },
      'blood-angels': { name: 'Blood Angels' },
      'dark-angels': { name: 'Dark Angels' },
      'deathwatch': { name: 'Deathwatch' },
      'grey-knights': { name: 'Grey Knights' },
      'imperial-fists': { name: 'Imperial Fists' },
      'iron-hands': { name: 'Iron Hands' },
      'raven-guard': { name: 'Raven Guard' },
      'salamanders': { name: 'Salamanders' },
      'space-marine': { name: 'Space Marine' },
      'space-wolves': { name: 'Space Wolves' },
      'ultramarines': { name: 'Ultramarines' },
      'white-scars': { name: 'White Scars' },
    },
    imperium: {
      'adepta-sororitas': { name: 'Adepta Sororitas' },
      'adeptus-custodes': { name: 'Adeptus Custodes' },
      'adeptus-mechanicus': { name: 'Adeptus Mechanicus' },
      'agents-of-the-imperium': { name: 'Agents de l\'Imperium' },
      'astra-militarum': { name: 'Astra Militarum' },
      'imperial-knights': { name: 'Imperial Knights' },
    },
    chaos: {
      'chaos-daemons': { name: 'Démons du Chaos' },
      'chaos-knights': { name: 'Chaos Knights' },
      'chaos-space-marines': { name: 'Spaces Marines du Chaos' },
      'death-guard': { name: 'Death Guard' },
      'thousand-sons': { name: 'Thousand Sons' },
      'world-eaters': { name: 'World Eaters' },
    },
    xenos: {
      'aeldari': { name: 'Aeldari' },
      'drukhari': { name: 'Drukhari' },
      'genestealer-cults': { name: 'Cultes Genestealers' },
      'leagues-of-votann': { name: 'Leagues of Votann' },
      'necrons': { name: 'Necrons' },
      'orks': { name: 'Orks' },
      'tau-empire': { name: 'T\'au Empire' },
      'tyranids': { name: 'Tyranids' },
    },
  };
  
</script>

<style scoped>

.full-width-container {
  width: 100%;
  padding-top: 30px;
  background-image: url('@/assets/Icone-image-etc/Vrac/thumb-1920-865231.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; /* Pour que l'image de fond reste fixe lors du défilement */
    background-position: center;
}

  .container {
    min-height: 100vh;
    padding-bottom: 80px;
    background-image: url('@/assets/Icone-image-etc/Vrac/thumb-1920-865231.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; /* Pour que l'image de fond reste fixe lors du défilement */
    background-position: center;
    color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center; /* Centre le contenu horizontalement */
    justify-content: flex-start; /* Aligne le contenu en haut */
  }

  .container-text-lore {
    background-image: url('@/assets/Icone-image-etc/dark-grunge-style-scratched-metal-surface_1048-12951.jpg');
    background-size: cover;
    background-repeat: repeat;
    background-position: top;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 24px;
    padding: 8px;
    border-radius: 20px;
    border: 8px solid #271d19;
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
    max-width: 100%;
    overflow: hidden;
  }

  .container-text-lore li {
    color: #4330f3;
  }

  .container-text-lore a {
    color: #ffffff;
    text-decoration: none;
  }

  .container-text-lore a:hover {
    text-decoration: underline;
  }

  @media (max-width: 766px) {
    .container-text-lore {
      background-image: url('@/assets/Icone-image-etc/dark-grunge-style-scratched-metal-surface_1048-12951.jpg');
      background-size: contain;
      background-position: center;
      font-size: 20px;
      line-height: 22px;
    }
  }


</style>
