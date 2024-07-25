<template>
    <div v-html="html" />
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  const props = defineProps<{
    html: string
  }>()
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles pour le contenu HTML ici si nécessaire */
  </style>
  