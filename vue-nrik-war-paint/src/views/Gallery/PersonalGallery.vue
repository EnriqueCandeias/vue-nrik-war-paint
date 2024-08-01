<template>
    <div class="container mt-5" style="margin-bottom: 100px;">
        <div class="container-text-outil-aos">
            <h1 class="text-center">Bienvenue dans votre Galerie Photo !</h1>
            <p>L'espace idéal pour partager et préserver vos figurines personnelles ! Que vous soyez un collectionneur passionné ou un amateur de miniatures, cette plateforme vous permet de télécharger, organiser et visualiser vos photos de figurines en toute simplicité. Glissez-déposez vos images ou sélectionnez-les directement depuis votre appareil pour les ajouter à votre galerie personnalisée. Garder une trace de votre collection en pleine croissance. Commencez dès maintenant à immortaliser et partager vos figurines préférées !</p>
            <div
            class="upload-area border border-secondary rounded p-5 text-center mb-4"
            @dragenter.prevent="highlight"
            @dragover.prevent="highlight"
            @dragleave.prevent="unhighlight"
            @drop.prevent="handleDrop"
            >
            <p>Glissez et déposez vos photos ici, ou</p>
            <input type="file" id="fileInput" accept="image/*" multiple hidden @change="handleFiles" ref="fileInput" />
            <button class="btn btn-success" @click="selectFiles">Sélectionner des fichiers</button>
            </div>
        </div>

            <div class="row row-cols-1 row-cols-md-3 g-4" ref="gallery">
            <div class="col" v-for="(image, index) in images" :key="index">
                <div class="card h-100 position-relative">
                <img :src="image.dataUrl" class="card-img-top" :alt="'Figurine: ' + image.name" @click="openModal(image)">
                <button class="btn btn-danger position-absolute top-0 end-0 m-2" @click="deleteImage(image.name)">&times;</button>
                </div>
            </div>
            </div>
  
      <!-- Modal -->
      <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="imageModalLabel">Figurine</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
              <img :src="selectedImage?.dataUrl" class="img-fluid" :alt="'Figurine: ' + selectedImage?.name">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import localforage from 'localforage';
  import { Modal } from 'bootstrap';
  
  const dropArea = ref(null);
  const fileInput = ref(null);
  const gallery = ref(null);
  const images = ref([]);
  const selectedImage = ref(null);
  
  const highlight = () => {
    dropArea.value.classList.add('highlight');
  };
  
  const unhighlight = () => {
    dropArea.value.classList.remove('highlight');
  };
  
  const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  };
  
  const handleFiles = (event) => {
  const files = Array.from(event.target.files);
  files.forEach(uploadFile);
};
  
  const selectFiles = () => {
    fileInput.value.click();
  };
  
  const uploadFile = (file) => {
    if (!file.type.startsWith('image/')) return;
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const dataUrl = reader.result;
      saveImage(file.name, dataUrl);
      addImageToGallery(file.name, dataUrl);
    };
  };
  
  const saveImage = (filename, dataUrl) => {
    localforage.setItem(filename, dataUrl).catch((err) => {
      console.error(err);
    });
  };
  
  const addImageToGallery = (filename, dataUrl) => {
    images.value.push({ name: filename, dataUrl });
  };
  
  const deleteImage = (filename) => {
    localforage.removeItem(filename).then(() => {
      images.value = images.value.filter((image) => image.name !== filename);
    }).catch((err) => {
      console.error(err);
    });
  };
  
  const openModal = (image) => {
    selectedImage.value = image;
    const modal = new Modal(document.getElementById('imageModal'));
    modal.show();
  };
  
  onMounted(() => {
    localforage.iterate((value, key) => {
      addImageToGallery(key, value);
    }).catch((err) => {
      console.error(err);
    });
  });
  </script>
  
  <style scoped>

    .container-text-outil-aos {
    margin: 50px 0 20px 0;
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

  .upload-area {
    border: 2px dashed #ccc;
    border-radius: 20px;
    padding: 20px;
    transition: background-color 0.3s ease;
    background-color: #AB5454;
  }
  
  .upload-area.highlight {
    background-color: #f9f9f9;
  }
  
  .card {
    transition: transform 0.2s ease;
  }
  
  .card:hover {
    transform: scale(1.1);
  }
  
  .card-img-top {
    object-fit: cover;
    height: 400px;
    cursor: pointer;
  }
  </style>
  