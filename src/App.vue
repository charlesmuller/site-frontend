<template>
  <v-app>
    <v-main>
        <MainContent />
    </v-main>
  </v-app>
</template>

<script>
import MainContent from './components/MainContent.vue'
import HomeContent from './components/HomeContent.vue'

export default {
  name: 'App',

  components: {
    MainContent,
    HomeContent,
  },

  data: () => ({
    //
  }),
}
</script>