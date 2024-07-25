<template>

    <div class="container">
        <div class="container-text-lore">
            <h2 style="text-align: center; font-size: 32px;">Seraphon :</h2><br><br>
            <p>Les Séraphons viennent d’Azyr, car leur royaume est <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Seraphon/375b4o3cz3bb1.webp" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: left; margin: 10px 6px 0 0; width: 200px; height: auto;">caché au sein des étoiles, là où aucun mortel ne peut aller. Seuls les Slanns ont le pouvoir de les appeler à la guerre. C’est la volonté de ces anciens prophètes qui guide les Séraphons au combat, lorsqu’ils adoptent des formes magiques et tangibles sur les champs de bataille des Royaumes Mortels.<br><br>

                Sur ordre des Slanns, les Séraphons se ruent au combat. Les mortels et les démons sont taillés en pièces par leurs assauts féroces. Les Séraphons écrasent les armées du Chaos grâce à leur rage disciplinée, et ils massacrent aussi tous ceux qui servent les ténèbres de gré ou de force.<br><br>
                
                Une fois que les cris d’agonie de leurs ennemis ont cessé, les Séraphons disparaissent, ne laissant derrière eux que des champs de batailles étrangement silencieux et parsemés des cadavres de ceux qui avaient imaginé les vaincre. Ils se moquent de l’or ou de la gloire, et ne combattent ni pour un royaume, ni pour un roi. Ils sont la colère incarnée des Slanns, et livrent une guerre sans merci. Tant que les Dieux du Chaos existeront, les Slanns et les Séraphons les combattront sans relâche.<br><br><br>
                
                <span style="font-size: 24px; font-weight: bold; text-align: center; display: block;">Les Guerriers des Étoiles</span><br><br>

                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Seraphon/65008cfc81165e274ffd4f896f5a352f.jpg" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: right; margin: 0 0 0 6px; width: 350px; height: auto;">Autour des feux de camp et dans les ruines de grandes cités, on murmure des histoires à propos d’une race reptilienne qui vivrait dans les étoiles. Les origines des Séraphons se sont perdues dans la nuit des temps, néanmoins on raconte qu’ils partirent vivre dans le firmament au début de l’Âge des Mythes. Les légendes parlent d’un empire stellaire loin au-dessus des plus hautes tours de Sigmaron, et même au-delà de la lumière de Sigendil. Les Séraphons vivent hors de portée de tous sauf des Slanns Starmasters, et attendent patiemment leur appel. Beaucoup de mythes racontent comment les Séraphons en sont venus à vivre dans les étoiles, et pourquoi ils se manifestent dans les Royaumes Mortels. Les vénérables Moines Sélénites d’Hysh disent que les Séraphons sont les enfants de Dracothion, et qu’ils naquirent de son souffle pendant l’Âge des Mythes. Ils pensent que la haine du Grand Drac envers le Chaos brûle dans le coeur de tous les Séraphons, et que c’est pour cette raison que les Slanns détestent tant les Dieux Sombres. Les Seigneurs Varèdes de la Forêt des Griffes évoquent des navires capables de voyager entre les mondes. Ils sont persuadés que les Séraphons mènent une croisade sans fin, et que les Royaumes Mortels ne sont qu’un seul de leurs nombreux champs de bataille. Les prophètes de la Tour Chuchotante affirment que les Séraphons sont issus de la même énergie que les Démons, mais qu’ils n’apparaissent qu’en présence des Slanns, car c’est à partir de leur mémoire qu’ils prennent forme.<br><br>

                Quoi qu’il en soit, les armées de Séraphons se matérialisent toujours dans un éclair de lumière aveuglant.<br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Seraphon/Seraphon_vs_Chaos_01.webp" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: left; margin: 10px 6px 0 0; width: 1500px; height: auto;">
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
  