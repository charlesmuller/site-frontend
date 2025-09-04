<template>
  <div class="app-container">
    <NavBarSite />
    <div class="main-content">
      <router-view />
    </div>
    <FooterBarSite />
  </div>
</template>

<script>
import NavBarSite from './components/NavBarSite.vue';
import FooterBarSite from './components/FooterBarSite.vue';

export default {
  name: 'App',
  components: {
    NavBarSite,
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
  margin-top: 5%;
  flex-grow: 1;
}

/* Footer styles moved to FooterBarSite.vue */

/* Responsividade global */
@media (max-width: 768px) {
  .main-content {
    margin-top: 3%;
  }
}

@media (max-width: 480px) {
  .main-content {
    margin-top: 2%;
  }
  
  footer {
    padding: 8px;
    font-size: 0.9rem;
  }
}
</style>
