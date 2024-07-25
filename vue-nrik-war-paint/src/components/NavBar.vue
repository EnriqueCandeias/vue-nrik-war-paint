
<template>

    <div>
        <nav class="navbar-desktop navbar navtop navbar-light bg-light w-100">
            <div class="container-fluid">
                <div class="d-flex align-items-center">
                    <router-link class="navbar-brand" to="/">
                        <img :src="logoSrc" alt="Logo Nrik War Paint" class="logo-left">
                    </router-link>
                    <div class="navbar-brand-title">Nrik War Paint</div>
                </div>

                <div class="search-bar d-flex align-items-center">
                    <span class="search-icon"><i class="fas fa-search"></i></span>
                    <input type="text" placeholder="Rechercher..." class="form-control">
                </div>
                
                <div class="nav-links d-flex align-items-center">
                    <a href="Catégorie-photo.html" class="nav-link mx-3">Galerie photo</a>
                    <router-link to="/ArmySection" class="nav-link mx-3">Ma collection</router-link>
                    <router-link to="/LoreSection" class="nav-link mx-3">Lore des Univers</router-link>
                </div>

                <div class="nav-links d-flex align-items-right">
                    <router-link to="/Login" class="nav-link mx-0">
                        <i class="fa-solid fa-user fa-lg" style="color: #F44336;"></i>
                    </router-link>
                </div>

            </div>
        </nav>

        <nav class="navbar-smartphone navtop navbar w-100">
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <a class="navbar-brand" href="Accueil.html"><i class="fa-solid fa-house fa-2x" style="color: #F44336;"></i></a>
                
                <div class="d-flex align-items-center mx-auto">
                    <img :src="logoSrc" alt="Logo Nrik War Paint" width="60" class="me-2 logo-nav">
                    <p class="m-0" style="color: #F44336; font-size: 2.5rem;">Nrik War Paint</p>
                </div>
                
                <div class="d-flex">
                    <a class="navbar-brand" href="Menu-recherche.html"><i class="fa-solid fa-magnifying-glass fa-2x" style="color: #F44336;"></i></a>
                    <a class="navbar-brand" href="Menu-déroulant.html"><i class="fa-solid fa-bars fa-2x" style="color: #F44336;"></i></a>
                </div>
            </div>
        </nav>
    </div>

</template>


<script setup>
import logo from '@/assets/Icone-image-etc/Icone/LogoNrikwarpaint-removebg-preview.png';


const logoSrc = logo;
</script>


<style scoped>

@font-face {
  font-family: 'CaveatBrush';
  src: url('@/assets/fonts/CaveatBrush-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.navbar {
    font-family: 'CaveatBrush';
    background: #666666;
    background: -moz-linear-gradient(top, #666666 0%, #000000 100%);
    background: -webkit-linear-gradient(top, #666666 0%, #000000 100%);
    background: linear-gradient(to bottom, #666666 0%, #000000 100%);
}

.navtop {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.navbar-brand img {
    width: 60px;
    height: auto;
}

.navbar-brand-title {
    font-size: 50px;
    font-weight: lighter;
    color: #F44336;
}

.search-bar {
    position: relative;
}

.search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #000000;
}

.search-icon i {
    font-size: 16px;
}

.search-bar input {
    padding: 10px 100px 10px 30px; /* Ajustement des espacements pour laisser de la place à l'icône */
    border: 2px solid #c5baba;
    border-radius: 4px;
    width: 150%; /* La largeur de la barre de recherche prendra la taille du conteneur parent */
    box-sizing: border-box; /* Inclure le padding et la bordure dans la largeur */
}

.nav-links {
    display: flex;
    align-items: center;
}

.nav-links .nav-link {
    margin: 0 10px;
    text-decoration: none;
    color: #F44336;
    font-size: 30px;
}

@media (max-width: 472px) {
    .navbar-desktop {
        display: none !important;
    }

    .logo-nav {
        display: none !important;
    }

    .m-0 {
        font-size: xx-large !important;
    }
}

@media (max-width: 768px) {
    .navbar-desktop {
        display: none !important;
    }

    .footer-content {
        margin: 4px !important;
        font-size: x-small;
        line-height:17px;
        color: rgb(8, 8, 8);
    }
}

@media (min-width: 769px) {
.navbar-smartphone {
        display: none;
}

.container-header-smartphone {
        display: none;
}
}

</style>