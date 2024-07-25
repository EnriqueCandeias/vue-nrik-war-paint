<template>

    <div class="container">
        <div class="container-text-lore">
            <h2 style="text-align: center; font-size: 32px;">Fyreslayers :</h2><br><br>
            <p>De nombreuses civilisations prospérèrent durant l'Âge des Mythes, mais aucune autant que les Pyrotueurs. Leur dieu, Grimnir, divinité duardine de la guerre, périt au terme d'une confrontation épique. Son enveloppe brisée se mêla au sang de son monstrueux ennemi, Vulcatrix, et des tempêtes de feu la dispersèrent à travers les Royaumes Mortels. Pour ses adeptes, rien ne serait plus jamais comme avant.<br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Fyreslayers/Fyreslayers.jpg" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: left; margin: 10px 6px 0 0; width: 180px; height: auto;">
                Puis vint l'Âge du Chaos, une ère qui vit moult cultures décimées par l'invasion des Dieux Sombres. La Grande Alliance s'effondra, Sigmar le Dieu-Roi se retira dans les Cieux et partout, les légions du Chaos imposèrent leur joug. Mais une race de guerriers résista. Forgés sur l'enclume de la guerre, les Pyrotueurs cherchèrent le combat plutôt que de le fuir, servant de mercenaires aux individus assez riches pour s'offrir leurs services.<br><br>
                
                Émergeant des magmaforts d'Aqshy, les Pyrotueurs se taillèrent leurs propres royaumes et amassèrent d'immenses butins. Constamment assiégés, ils repoussèrent tous ceux qui tentèrent de violer leurs sanctuaires volcaniques. Ils n'avaient pas d'alliés, tous, y compris leurs commanditaires, les considérant comme des mercenaires cupides. Mais cette défiance et cette incompréhension ne les touchaient pas, car l'or qu'ils cherchaient avec tant d'ardeur dissimulait un secret. À chaque bataille, leur rêve se rapprochait de sa concrétisation.<br><br>
                
                Lorsque Sigmar rouvrit les Cieux et déploya ses Stormcast Eternals, ils s'aperçurent que seuls les Pyrotueurs avaient échappé au Chaos. Ils avaient même proliféré. Et par la flamme et la fureur, ils continueront de combattre jusqu'à leur ultime victoire, conformément au serment qui les lie à Grimnir.<br><br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Fyreslayers/fyreslayer12.jpg" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: right; margin: 0 6px 8px 0; width: 350px; height: auto;">
                <span style="font-size: 24px; font-weight: bold; text-align: center; display: block;">Grimnir dieu Duardin de la guerre</span><br><br>

                Le trépas du dieu Grimnir fût une immense tragédie pour le peuple des Pyrotueurs. Les conséquences de cette perte tragique motivent non seulement leurs actes, mais elles inspirent également leur zèle, leurs prouesses martiales, et influencent grandement leur espoir fataliste en l'avenir.<br><br>

                Bien avant la fin du monde-qui-fut, Grimnir avait déjà entonné son chant funèbre. Il s'était aventuré seul dans les Terres du Nord, déterminé à fermer les portes polaires qui livraient passage aux adeptes du Chaos et permettaient à la puissance corruptrice des Dieux Sombres d'investir la réalité.<br><br>

                Au fil de ses voyages, ses combats, ses exploits et ses épreuves furent innombrables. Désorienté par la folie du royaume dans lequel il avait été attiré, Grimnir échoua à mener à bien sa mission. Cependant, sa détermination et sa force étaient telles qu'il parvint à rester en vie et garder sa santé mentale.<br><br>

                La durée de ses errances est inconnue, car le temps n'a pas de signification dans le Royaume du Chaos. Toutefois, son histoire ne commence réellement qu'après la destruction du monde-qui-fut, à l'aube de l'Âge des Mythes. Au cours de cette ère de légendes, les dieux découvrirent et foulèrent pour la première fois les Royaumes Mortels, Il en fut ainsi pour Grimnir, qui se réveilla un jour à Aqshy pour se retrouver entouré de ses semblables.<br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Fyreslayers/fyreslayers-magmadroth-horz.webp" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: left; margin: 10px 6px 6px 0; width: 1500px; height: auto;">
            </p>
            <a href="http://www.freepik.com">Designed by Kjpargeter / Freepik</a>
        </div>
    </div>

</template>
  
<script setup>

</script>

<style scoped>

.container-text-lore {
    margin-top: 20px;
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

@media (max-width: 766px) {
    .container-text-lore {
        background-image: url('@/assets/Icone-image-etc/Best.jpg'); /* Changer l'image de fond pour les petits écrans */
        background-size: contain; /* Ajuster la taille de l'image de fond */
        background-position: center; /* Centrer l'image de fond */
        font-size: 20px; /* Ajuster la taille de la police si nécessaire */
        line-height: 22px; /* Ajuster la hauteur de ligne si nécessaire */
    }
}

.container-text-lore img {
    margin: 0 auto; /* Centre l'image horizontalement */
    max-width: 100%; /* Limite la largeur de l'image à 100% de la largeur du conteneur */
    height: auto; /* Permet à la hauteur de l'image de s'ajuster automatiquement pour conserver les proportions */
    border-radius: 20px;
    float: right; /* Pour aligner l'image à droite */
    margin: 0 0 10px 10px; /* Pour ajouter de l'espace autour de l'image */
}

.container {
        padding-bottom: 80px;
    }

.container-text-lore a {
    color: #000000; /* Couleur des liens */
    text-decoration: none; /* Retire le soulignement des liens */
}

.container-text-lore a:hover {
    text-decoration: underline; /* Ajoute un soulignement au survol des liens */
}

</style>
  