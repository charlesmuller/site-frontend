<template>
  <div class="main-header">
    <div class="content-header-left">
      <div class="main-title">
        <h1 class="white--text">Charles Müller</h1>
      </div>
      <div class="main-content-data">
        <div class="content-text">
          <p>
            A web developer passionate about creating innovative digital solutions. My
            journey in
            development began in 2022, and since then, I have been dedicated to enhancing my skills and
            contributing to meaningful projects.
          </p>
        </div>
        <div class="data-box">
          <div class="image-job-title">
            <img src="/public/foto-perfil.jpg" alt="">
            <p>Full Stack Developer</p>
          </div>
          <div class="main-about">
            <a href="https://github.com/charlesmuller" target="_blank">
              <img src="/src/assets/icons-github.svg">
            </a>
            <a href="https://www.instagram.com/charlesrullem/" target="_blank">
              <img src="/src/assets/icons-instagram.svg">
            </a>
            <a href="https://www.linkedin.com/in/charles-m%C3%BCller-da-silva-535555108/" target="_blank">
              <img src="/src/assets/icons-linkedin.svg">
            </a>
            <a href="https://x.com/charlesrullem" target="_blank">
              <img src="/src/assets/icons-twitterx.svg">
            </a>
          </div>
        </div>
      </div>
    </div>
    <RigthMenu />
  </div>
</template>

<script>
import RigthMenu from './RigthMenu.vue';

export default {
  name: 'MainContent',
  components: {
    RigthMenu
  }
};
</script>

<style>
.content-header-left {
  width: 60%;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 78%;
  max-width: 1080px;
  margin: 30px auto;
  align-items: center;

}

.main-content-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-text p {
  margin-bottom: 2rem;
  width: 100%
}

.main-title h1 {
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.data-box {
  display: flex;
  width: 100%;
  max-width: 70%;
  align-items: center;
}

.main-about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
}

.main-about a {
  cursor: pointer;
}

.data-box img {
  width: 50px;
  height: 50px;
  border-radius: 25%;
  margin-right: 10px;
}

.image-job-title {
  display: flex;
  align-items: center;
  width: 50%;
}

.main-list ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  list-style: none;
}

.main-list ul li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.main-list a {
  text-decoration: none;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #212320;
}

/* Responsividade para mobile */
@media (max-width: 768px) {
  .main-header {
    flex-direction: column;
    width: 95%;
    max-width: 95%;
    margin: 20px auto;
    gap: 20px;
  }

  .content-header-left {
    width: 100%;
  }

  .main-title h1 {
    font-size: 2.5rem;
    text-align: center;
  }

  .main-content-data {
    align-items: center;
  }

  .content-text p {
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .data-box {
    flex-direction: column;
    max-width: 100%;
    gap: 15px;
  }

  .image-job-title {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .image-job-title p {
    text-align: center;
    margin: 0;
  }

  .main-about {
    width: 100%;
    justify-content: center;
    gap: 20px;
  }

  .data-box img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .main-title h1 {
    font-size: 2rem;
  }

  .content-text p {
    font-size: 0.85rem;
  }

  .main-about {
    gap: 15px;
  }

  .data-box img {
    width: 35px;
    height: 35px;
  }
}
</style>
