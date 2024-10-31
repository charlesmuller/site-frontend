<template>
  <v-app class="d-flex flex-column fill-height">
    <v-main class="flex-grow-1">
      <MainContent />
    </v-main>
    <v-footer app color="background">
      <span class="white--text">Charles Müller</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    MainContent
  },
};
</script>

<style>
.fill-height {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
