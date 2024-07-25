<template>

    <div class="container">
        <div class="container-text-lore">
            <h2 style="text-align: center; font-size: 32px;">Daughters of Khaine :</h2><br><br>
            <p>Agiles, cruelles et rapides, les Daughters of Khaine se trouvent parmi les brumes d'Ulgu. Bien qu'elles soient les adeptes de la guerre et du sang, leur autel est l'ombre de l'ascendance. <br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Daughters of Khaine/AOSFFDoK-May23-Art11ek.jpg" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: left; margin: 10px 6px 0 0; width: 180px; height: auto;">
                Le siège du pouvoir des Daughters of Khaine se trouve parmi les brumes d'Ulgu, où règne en maître la duplicité qui, pour certaines, est un mode de vie. Ces guerrières sont les héritières d'une tradition bâtie sur des sacrifices et des rites de bataille sanglants - bien qu'il s'agisse d'un héritage qu'elles ne peuvent revendiquer ouvertement de crainte de susciter l'ire de Sigmar et être chassées du monde civilisé. Au lieu de quoi elles se cachent derrière des masques, des mensonges et des manigances pour agir — et aucune ne maîtrise l'art de la duplicité comme leur doyenne et souveraine, la demi-déesse au cœur noir, Morathi.<br><br>
                
                Ces Khainites - comme les adoratrices du dieu aelf à la main sanglante se font appeler — se nourrissent du sang versé. Bien qu'il ne s'agisse que d'un pâle reflet des anciens cultes du sang, ces pratiques ne sont pas moins efficaces aujourd'hui. Les prêtresses de Khaine peuvent perfectionner leur art en volant l'essence vitale de leurs ennemis. En baignant leur corps dans le sang chaud ou en buvant à la coupe de leurs chaudrons, ces prêtresses se muent en jeunes filles à la peau d'albâtre inaltérée. Elles comptent parmi les premières aelfs libérées de l'emprise de Slaanesh, et l'une de leurs plus grandes prêtresses est une dame de l'ombre.<br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Daughters of Khaine/6f9834f6cb7c693025251dad552d054b.jpg" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: right; margin: 10px 0 8px 0; width: 340px; height: auto;">
                Cependant, le culte de Khaine demeure silencieux.<br><br>
                
                Morathi, bien qu'elle prétende n'être qu'une puissance divine, est devenue la despote d'une nouvelle civilisation modelée selon ses désirs.<br><br>
                
                Conclure une alliance avec les autres forces de l'Ordre fut pour Morathi une tromperie de plus, afin de réserver le secret de ses plans. Les Daughters of Khaine se sont taillé une place dans les cités franches en tant que gladiatrices, délivrant des performances à la fois sanguinaires et séduisantes, qui ont bien vite rempli leurs coffres d'or. Elles ont un statut semi-légal, se produisant dans des cryptes, des entrepôts vides et des bibliothèques abandonnées aussi bien que dans des arènes et des amphithéâtres officiels, mais le frisson de l'illégalité ne les rend que plus attirantes.<br><br>
                
                Les plus riches peuvent s'offrir les spectacles plus exotiques qui suivent l'attraction principale. Les arènes des Witch Aelves abritent en effet davantage que des vierges ivres de tueries et les insensés qui osent les défier, car des créatures surnaturelles rodent parmi les ombres.<br><br>
                
                La véritable raison pour laquelle Sigmar tolère cette organisation et les cités qu'elle a érigées dans les Royaumes Mortels ne fait aucun doute. Quand l'ombre du Chaos s'étend sur les terres, ou s'il faut lancer une offensive pour conquérir de nouveaux territoires, les Daughters of Khaine prouvent leur utilité et leur valeur aux forces de l'Ordre. Elles déferlent comme une vague de lames acérées, prises d'une frénésie qui décuple leur vitesse et leur adresse. Voir les Daughters of Khaine exercer leurs talents meurtriers est un privilège pour lequel certains sont prêts à payer cher, mais les voir se battre est une expérience révélatrice, un cauchemar viscéral dont les témoins se souviendront jusqu'à leur mort.<br><br>
                <img src="@/assets/Icone-image-etc/Age of Sigmar/Illustration Daughters of Khaine/Preview-Feb18-Art8rs.jpg" alt="Sigmar" class="img-fluid" style="border-radius: 20px; float: left; margin: 10px 6px 0 0; width: 1500px; height: auto;">
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
  