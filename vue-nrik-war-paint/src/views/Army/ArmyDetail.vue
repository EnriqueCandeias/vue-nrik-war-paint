<template>
  <div>
    <div v-if="loading">Chargement des données...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="container-text-outil-aos">
        <h2 class="description-title">{{ armyTitle }}</h2><br>
        <p v-html="formattedDescription"></p>
      </div>
      <div class="filter-buttons">
        <button @click="setFilter('all')" :class="{ active: filter === 'all' }">Tous</button>
        <button @click="setFilter('owned')" :class="{ active: filter === 'owned' }">Acquis</button>
        <button @click="setFilter('notOwned')" :class="{ active: filter === 'notOwned' }">Non acquis</button>
      </div>
      <div class="figurine-container">
        <div v-for="model in filteredModels" :key="model.name" class="card-outil">
          <div class="card-img-container">
            <img v-if="model.image" :src="model.image" alt="Image du modèle" class="card-img-top" />
          </div>
          <div class="card-body">
            <h5 class="card-title-outil">{{ model.name }}</h5>
            <button @click="toggleOwnership(model)" :class="{ owned: model.owned }" class="btn btn-toggle-ownership">
              {{ model.owned ? 'Acquis' : 'Non acquis' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

interface Model {
  armyId: number
  name: string
  image: string
  owned: boolean
}

interface Army {
  id: number
  name: string
  image: string
}

interface ArmyDescription {
  armyId: number
  title: string
  description: string
}

const army = ref<Army | null>(null)
const models = ref<Model[]>([])
const armyDescription = ref<ArmyDescription | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)
const filter = ref('all') // Ajout de l'état de filtre

const armyName = route.query.name as string

onMounted(async () => {
  try {
    const armyResponse = await fetch('/armies.json')
    const modelsResponse = await fetch('/models.json')
    const descriptionsResponse = await fetch('/army-descriptions.json')
    const armiesData = await armyResponse.json() as { armies: Army[] }
    const modelsData = await modelsResponse.json() as { models: Model[] }
    const descriptionsData = await descriptionsResponse.json() as { descriptions: ArmyDescription[] }

    const foundArmy = armiesData.armies.find(a => a.name === armyName)
    if (foundArmy) {
      army.value = foundArmy
      models.value = modelsData.models.filter(m => m.armyId === foundArmy.id)
      loadOwnershipState()  // Charger l'état de possession depuis localStorage
      const description = descriptionsData.descriptions.find(d => d.armyId === foundArmy.id)
      armyDescription.value = description || { armyId: -1, title: '', description: 'Aucune description disponible pour cette armée.' }
    } else {
      error.value = 'Armée non trouvée'
    }
  } catch (err) {
    error.value = 'Erreur lors du chargement des données: ' + (err as Error).message
  } finally {
    loading.value = false
  }
})

const loadOwnershipState = () => {
  const savedState = localStorage.getItem('ownershipState')
  if (savedState) {
    const parsedState = JSON.parse(savedState) as { [key: string]: boolean }
    models.value.forEach(model => {
      model.owned = parsedState[model.name] || false
    })
  }
}

const saveOwnershipState = () => {
  const state = models.value.reduce((acc, model) => {
    acc[model.name] = model.owned
    return acc
  }, {} as { [key: string]: boolean })
  localStorage.setItem('ownershipState', JSON.stringify(state))
}

const toggleOwnership = (model: Model) => {
  model.owned = !model.owned
  saveOwnershipState()  // Sauvegarder l'état de possession dans localStorage
}

// Fonction pour définir le filtre
const setFilter = (newFilter: string) => {
  filter.value = newFilter
}

// Computed property pour filtrer les modèles affichés
const filteredModels = computed(() => {
  if (filter.value === 'owned') {
    return models.value.filter(model => model.owned)
  } else if (filter.value === 'notOwned') {
    return models.value.filter(model => !model.owned)
  } else {
    return models.value
  }
})

// Convertit le texte de description en HTML avec un lien vers le composant
const formattedDescription = computed(() => {
  if (armyDescription.value) {
    return armyDescription.value.description.replace(
      /\[Cliquez ici !\]\(([^)]+)\)/g,
      (_, path) => `<a href="/lore/factions/${path}" style="color: rgb(28, 214, 28); font-style: italic; font-size: larger;">Cliquez ici !</a>`
    )
  }
  return ''
})

const armyTitle = computed(() => armyDescription.value?.title || '')
</script>



<style scoped>
.army-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.army-image {
  max-width: 10%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.container-text-outil-aos {
  margin: 50px 150px 0 150px;
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

@media (max-width: 766px) {
  .container-text-outil-aos {
    margin: 50px 80px 0 80px;
    padding: 15px;
    border-radius: 10px;
    font-size: 20px;
    line-height: 1.2;
  }
}

.container-text-outil-aos a {
  color: rgb(28, 214, 28);
  font-style: italic;
  font-size: larger;
  text-decoration: none;
}

.container-text-outil-aos a:hover {
  text-decoration: underline;
}

.description-title {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #000000;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.filter-buttons button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #171818;
  color: #fff;
}

.filter-buttons button.active {
  background-color: #32a852;
}

.filter-buttons button:hover {
  background-color: #278742;
}

.figurine-container {
  margin-top: 20px;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card-outil {
  background-color: #ffffff; /* Fond blanc */
  border-radius: 20px; /* Bordure arrondie */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre subtile */
  width: 100%;
  max-width: 200px; /* Largeur max des cartes */
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-img-container {
  width: 100%;
  height: 200px; /* Hauteur fixe pour le conteneur d'image */
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-img-top {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* Garder l'image couverte sans déformation */
}

.card-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title-outil {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px; /* Espace entre le titre et le bouton */
  min-height: 40px; /* Hauteur minimale pour les titres */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; /* Centre le texte sur plusieurs lignes */
}

.btn-toggle-ownership {
  padding: 5px 10px;
  background-color: #8E5454;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-toggle-ownership.owned {
  background-color: #32a852;
}

.btn-toggle-ownership:hover {
  background-color: #6b3939;
}

.btn-toggle-ownership.owned:hover {
  background-color: #278742;
}
</style>
