<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        Charles Müller
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item" :value="item" @click="changeTab(item)">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-card color="basil" flat class="mt-4">
      <v-card-text>
        <component :is="getContent(tab)" />
      </v-card-text>
    </v-card>

  </v-card>
</template>

<script>
import HomeContent from './HomeContent.vue';
import AboutContent from './AboutContent.vue';

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
      }
      return contents[item];
    }
  }
}
</script>

<style>
.bg-basil {
  background-color: #FFFBE6 !important;
}

.text-basil {
  color: #356859 !important;
}
</style>
