<template>
  <div class="app-container">
    <NavBarSite />
    <div class="main-content">
      <MainContent />
    </div>
    <FooterBarSite />
  </div>
</template>

<script>
import NavBarSite from './components/NavBarSite.vue';
import MainContent from './components/MainContent.vue';
import FooterBarSite from './components/FooterBarSite.vue';

export default {
  name: 'App',
  components: {
    NavBarSite,
    MainContent,
    FooterBarSite
  },
};
</script>

<style>
html,
body,
.app-container {
  height: 100%;
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex-grow: 1;
}

footer {
  margin-top: auto;
  background-color: #E8E8E3;
  padding: 10px;
  text-align: center;
}
</style>
