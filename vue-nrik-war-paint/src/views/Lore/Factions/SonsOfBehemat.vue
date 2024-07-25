<template>

    <div class="container">
        <div class="container-text-lore">
            <h2 style="text-align: center; font-size: 32px;">Sons of Behemat :</h2><br><br>
            <p>Les Fils de Behemat sont des gargants qui ont trouvé leur but et sont devenus plus unifiés après la mort de Behemat. Ils deviennent si forts et si grands que certains spéculent qu'un jour l'un d'entre eux pourrait devenir un nouveau Titan Mondial.<br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Sons of Behemat/billy-christian-sons-of-behemat-final2.jpg" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: left; margin: 0 15px 11px 0; width: 330px; height: auto;">

                Les nombreux types de gargants trouvés à travers les Royaumes Mortels sont à juste titre redoutés pour leur taille gigantesque et leur force colossale. N'ayant aucun prédateur naturel, les gargants chassent, dorment, mangent des gens tout entiers, boivent de la bière capturée, dorment à nouveau, rotent, se provoquent en pètant les uns sur les autres, et détruisent des colonies simplement parce qu'ils le peuvent.<br><br>
                
                Cependant, les Fils de Behemat ne sont plus des brutes simples d'esprit facilement bernées par les races plus petites. Suite à la mort de Behemat, ils ont formé des groupes de guerre quasi-imbattables qui écrasent tout ce qui s'oppose à eux.<br><br><br>
                
                <span style="font-size: 24px; font-weight: bold; text-align: center; display: block;">Contes Gargantuesques</span><br><br>
                
                L'histoire des gargants est transmise oralement parmi les matriarches des tribus. Le but de ces histoires est d'apprendre l'ambition et d'être incité à des actes de violence véritablement mythiques, non pas d'apprendre une sorte de sagesse ou de prudence.<br><br>
                
                Voici un assemblage des histoires orales courantes qui forment la perspective historique des Fils de Behemat :<br><br><br>
                
                <span style="font-size: 24px; font-weight: bold; text-align: center; display: block;">Grand-père des Gargants</span><br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Sons of Behemat/sons_of_behemat_battle_tome_cover_by_thomas_elliott_art_dfh2vgr-fullview.jpg" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: right; margin: 0 0 11px 15px; width: 300px; height: auto;">
                Ymnog, le Premier Titan, avait un tempérament si grand qu'il a une fois utilisé sa massue pour briser la réalité elle-même en terre, mer et ciel.<br><br>

                Ymnog se rassasia en mangeant les comètes des cieux et les fit descendre avec le Premier Océan. Puis, il se coucha créant les gouffres des royaumes avec son propre poids. En dormant, la bouche ouverte, sa bave créa les rivières et son ronflement le premier tonnerre.<br><br>
                
                Pendant qu'Ymnog dormait, les pierres dans son ventre ont grandi pour devenir Behemat et sa parenté de gargants. Désirant s'échapper, Behemat prépara, dans les entrailles de son père, une gnôle si puissante qu'elle fit vomir Ymnog, rejetant les gargants dans sa bouche. Même avec le salut à portée de main, deux des gargants, Gorg et Ama-Gorag, commencèrent à se battre l'un contre l'autre pour un pot de vomi sur la langue d'Ymnog afin de se désaltérer. Par conséquent, ils furent tous deux avalés de nouveau pour toujours.<br><br>
                
                Seul Behemat s'échappa vivant en martelant les crocs d'Ymnog, dont les éclats devinrent les premières montagnes.<br><br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Sons of Behemat/Sons_of_Behemat_Attack_02.webp" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: left; margin: 10px 6px 0 0; width: 1500px; height: auto;">
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
  