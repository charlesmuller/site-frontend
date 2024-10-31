<template>
  <v-card >
    <v-card-title class="text-center justify-center py-6" color="background">
      <h1 class="font-weight-bold text-h2" bg-color="background">
        Charles Müller
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="background"  grow>
      <v-tab v-for="item in items" :key="item" :value="item" @click="changeTab(item)">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-card  flat class="mt-4">
      <v-card-text>
        <component :is="getContent(tab)" />
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
import HomeContent from './HomeContent.vue';
import AboutContent from './AboutContent.vue';
import ContactContent from './ContactContent.vue';

export default {
  data() {
    return {
      tab: 'Home',
      items: [
        'Home', 'About me', 'Contact',
      ]
    }
  },
  methods: {
    changeTab(item) {
      this.tab = item;
    },
    getContent(item) {
      const contents = {
        'Home': HomeContent,
        'About me': AboutContent,
        'Contact': ContactContent,
      }
      return contents[item];
    }
  }
}
</script>

<style>

</style>
