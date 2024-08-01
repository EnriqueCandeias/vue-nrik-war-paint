<template>
  <div id="myFooter">
    <nav class="footer navbar">
      <div class="container-fluid d-flex">
        <div class="d-flex align-items-center">
          <router-link to="/">
            <img :src="logoSrc" alt="Logo" class="logo-bottom footer-content" />
          </router-link>
          <p class="footer-content">Copyright © 2024 <br /> droits réservés.</p>
        </div>
        <div class="d-flex align-items-center">
          <a href="https://www.facebook.com" target="_blank">
            <img :src="facebookSrc" alt="Facebook Logo" class="logo-bottom footer-content" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img :src="instagramSrc" alt="Instagram Logo" class="logo-bottom footer-content" />
          </a>
          <a href="https://x.com" target="_blank">
            <img :src="xSrc" alt="X Logo" class="logo-bottom footer-content" />
          </a>
        </div>
        <div class="d-flex align-items-center">
          <router-link class="footer-content" to="/">Accueil</router-link>
          <p class="footer-content"><a href="Contact.html">Contact</a></p>
          <p class="footer-content"><a href="FAQ.html">FAQ</a></p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';
import logo from '@/assets/Icone-image-etc/Icone/LogoNrikwarpaint-removebg-preview.png';
import facebook from '@/assets/Icone-image-etc/Icone/facebook.png';
import instagram from '@/assets/Icone-image-etc/Icone/instagram.png';
import x from '@/assets/Icone-image-etc/Icone/X.png';

const logoSrc = ref(logo);
const facebookSrc = ref(facebook);
const instagramSrc = ref(instagram);
const xSrc = ref(x);
const route = useRoute();

function hideFooter() {
    const footer = document.getElementById("myFooter");
    footer.style.bottom = "-100px";
}

function checkFooterVisibility() {
    const footer = document.getElementById("myFooter");
    const windowHeight = window.innerHeight; // Hauteur de la fenêtre du navigateur
    const bodyHeight = document.body.scrollHeight; // Hauteur totale du corps du document
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop; // Position de défilement actuelle

    // Si la hauteur du contenu est moins que la hauteur de la fenêtre, affiche le footer
    if (bodyHeight <= windowHeight) {
        footer.style.bottom = "0";
    } else {
        // Détecte si l'utilisateur est arrivé en bas de la page
        if (windowHeight + scrollPosition >= bodyHeight - 1) {
            footer.style.bottom = "0"; // Affiche le footer
        } else {
            footer.style.bottom = "-100px"; // Cache le footer
        }
    }
}

onMounted(() => {
    hideFooter();
    checkFooterVisibility();
    window.addEventListener("scroll", checkFooterVisibility);
    window.addEventListener("resize", checkFooterVisibility);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", checkFooterVisibility);
    window.removeEventListener("resize", checkFooterVisibility);
});

// Watch for route changes to re-check footer visibility
watch(route, () => {
    hideFooter();
    checkFooterVisibility();
});
</script>

<style scoped>
.navbar {
    background: #666666;
    background: -moz-linear-gradient(top, #666666 0%, #000000 100%);
    background: -webkit-linear-gradient(top, #666666 0%, #000000 100%);
    background: linear-gradient(to bottom, #666666 0%, #000000 100%);
}

.logo-bottom {
    width: 30px; /* ou une autre valeur comme '50%' ou '300px' selon vos besoins */
    height: auto; /* Conserve le ratio de l'image */
    max-width: 200px; /* Limite la largeur maximale de l'image, ajustez cette valeur selon vos besoins */
}

#myFooter {
    position: fixed;
    bottom: -100px; /* Déplace le footer hors de la vue initialement */
    left: 0;
    width: 100%;
    background-color: #f0f0f0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    transition: bottom 0.3s ease; /* Transition douce pour l'animation */
}

.footer-content {
    margin: 3px;
    line-height: 17px;
    color: white;
}

.footer-content a {
    color: white;
    text-decoration: none;
}

.footer-content a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .navbar-desktop {
        display: none !important;
    }

    .footer-content {
        margin: 4px !important;
        font-size: x-small;
        line-height: 17px;
        color: rgb(255, 255, 255);
    }
}
</style>
