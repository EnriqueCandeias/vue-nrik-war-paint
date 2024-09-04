<template>

  <div class="featured-section">
        <h2 style="text-align: center; margin-bottom: 1.5em;">Figurines à la une</h2>
        <div class="featured-grid">
          <div class="featured-item">
            <img src="../assets/Icone-image-etc/Photo random communauté/IMG_1259.png" alt="Figurine Space Marine Ultramarines, peinte en bleu et or" width="250" height="350">
            <p>Stormcast Eternals</p>
            <div class="user-info">
              <img src="../assets/Icone-image-etc/Icone/LogoNrikwarpaint-removebg-preview.png" alt="Photo de profil utilisateur" width="40" height="40" class="profile-pic">
              <p class="username">Nrik</p>
            </div>
          </div>
          <div class="featured-item">
            <img src="../assets/Icone-image-etc/Photo random communauté/IMG_1262.png" alt="Figurine Elfe Sylvain, archer en tenue verte" width="250" height="350">
            <p>Chevalier Questor</p>
            <div class="user-info">
              <img src="../assets/Icone-image-etc/Icone/LogoNrikwarpaint-removebg-preview.png" alt="Photo de profil utilisateur" width="40" height="40" class="profile-pic">
              <p class="username">Nrik</p>
            </div>
          </div>
          <div class="featured-item">
            <img src="../assets/Icone-image-etc/Photo random communauté/IMG_1272.png" alt="Figurine Chevalier du Chaos, armure noire avec des pointes" width="250" height="350">
            <p>Bladegheist Revenant</p>
            <div class="user-info">
              <img src="../assets/Icone-image-etc/Icone/LogoNrikwarpaint-removebg-preview.png" alt="Photo de profil utilisateur" width="40" height="40" class="profile-pic">
              <p class="username">Nrik</p>
            </div>
          </div>
          <div class="featured-item">
            <img src="../assets/Icone-image-etc/Photo random communauté/IMG_1283.png" alt="Figurine Mage de Feu, robe rouge flamboyante" width="250" height="350">
            <p>Chainsrap</p>
            <div class="user-info">
              <img src="../assets/Icone-image-etc/Icone/LogoNrikwarpaint-removebg-preview.png" alt="Photo de profil utilisateur" width="40" height="40" class="profile-pic">
              <p class="username">Nrik</p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="category-grid">
        <div class="category">
          <h2>Galerie Photo</h2>
          <p>Immortalisez vos figurines préférées et partagez-les avec la communauté. Explorez les créations d'autres collectionneurs passionnés.</p>
          <router-link to="/personal-gallery" class="nav-link mx-3">Découvrir la galerie</router-link>
        </div>
        
        <div class="category">
          <h2>Ma Collection</h2>
          <p>Gérez facilement votre collection de figurines. Suivez vos acquisitions par jeu et par armée, et planifiez vos prochains achats.</p>
          <router-link to="/ArmySection" class="nav-link mx-3">Gérer ma collection</router-link>
        </div>
        
        <div class="category">
          <h2>Univers & Lore</h2>
          <p>Plongez dans les histoires fascinantes derrière chaque armée et chaque jeu. Découvrez les secrets et les légendes de vos figurines.</p>
          <router-link to="/LoreSection" class="nav-link mx-3">Explorer le lore</router-link>
        </div>
      </div>
  
      <div class="cta-section">
        <h2>Rejoignez notre communauté de collectionneurs passionnés !</h2>
        <p>Partagez vos créations, échangez des conseils et restez informé des dernières nouveautés.</p>
        <a href="/inscription" class="cta-button">S'inscrire gratuitement</a>
      </div>
  
      <div class="featured-section2">
        <h2>Dernières actualités</h2>
        <ul>
          <li>Nouveau set de peintures spéciales pour effets métalliques</li>
          <li>Concours de peinture : les inscriptions sont ouvertes</li>
          <li>Interview exclusive avec le sculpteur de la nouvelle gamme "Héros Mythiques"</li>
          <li>Guide de débutant : comment choisir sa première armée</li>
        </ul>
      </div>
  
    </template>
    
    <script setup>
  
  document.addEventListener('DOMContentLoaded', (event) => {
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
          category.addEventListener('mouseenter', () => {
            category.style.backgroundColor = '#ecf0f1';
          });
          category.addEventListener('mouseleave', () => {
            category.style.backgroundColor = 'white';
          });
        });
  
        // Ajout d'une animation simple pour les figurines à la une
        const featuredItems = document.querySelectorAll('.featured-item');
        featuredItems.forEach(item => {
          item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
          });
          item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
          });
        });
      });
  
    </script>
    
    <style scoped>
  
    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem;
    }
    .category {
      background: #666666;
      background: -moz-linear-gradient(top, #666666 0%, #000000 100%);
      background: -webkit-linear-gradient(top, #666666 0%, #000000 100%);
      background: linear-gradient(to bottom, #666666 0%, #000000 100%);
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    .category:hover {
      transform: translateY(-5px);
    }
    .category h2 {
      color: #ffffff;
      margin-top: 0;
    }
    .category p {
      color: #ffffff;
    }
    .category a {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: #4BAA34;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }
    .category a:hover {
      background-color: #AB5454;
    }
    .featured-section {
      background: #666666;
      background: -moz-linear-gradient(top, #666666 0%, #000000 100%);
      background: -webkit-linear-gradient(top, #666666 0%, #000000 100%);
      background: linear-gradient(to bottom, #666666 0%, #000000 100%);
      border-radius: 8px;
      padding: 2rem;
      margin: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .featured-section2 {
      background: #666666;
      background: -moz-linear-gradient(top, #666666 0%, #000000 100%);
      background: -webkit-linear-gradient(top, #666666 0%, #000000 100%);
      background: linear-gradient(to bottom, #666666 0%, #000000 100%);
      border-radius: 8px;
      padding: 3rem;
      margin: 2rem;
      margin-bottom: 80px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .featured-section h2, p {
      color: #ffffff;
      margin-top: 0;
    }
    .featured-section2 h2, li {
      color: #ffffff;
      margin-top: 0;
    }
    .featured-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }
    .featured-item {
      text-align: center;
    }
    .featured-item img {
      max-width: 100%;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }
    .user-info {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
    }
    .profile-pic {
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    .username {
      color: #ffffff;
    }
    .cta-section {
      background-color: #ffffff;
      color: rgb(0, 0, 0);
      text-align: center;
      padding: 2rem;
      border-radius: 8px;
      margin: 2rem;
    }
    .cta-section h2 {
      margin-top: 0;
    }
    .cta-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: #4BAA34;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .cta-button:hover {
      background-color: #AB5454;
      color: white;
    }
  
    </style>
  