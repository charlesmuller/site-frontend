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
            development began in 2021, and since then, I have been dedicated to enhancing my skills and
            contributing to meaningful projects.
          </p>
        </div>
        <div class="data-box">
          <div class="image-job-title">
            <img src="/public/foto-perfil2.jpg" alt="">
            <p>Full Stack Developer</p>
          </div>
          <div class="main-about">
            <img src="/src/assets/icons-github.svg" alt="home icon">
            <img src="/src/assets/icons-instagram.svg" alt="home icon">
            <img src="/src/assets/icons-linkedin.svg" alt="home icon">
            <img src="/src/assets/icons-twitterx.svg" alt="home icon">
          </div>
        </div>
      </div>
    </div>
    <div class="content-header-right">
      <div class="main-list">
        <ul>
          <li>
            <a>
              <img src="/src/assets/profile.svg">
            </a>
            <p>Things about me</p>

          </li>
          <li>
            <a>
              <img src="/src/assets/book.svg">
            </a>
            <p>Work history</p>
          </li>
          <li>
            <a>
              <img src="/src/assets/pencil.svg">
            </a>
            <p>My blog (in progress)</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
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
  width: 80%;
  max-width: 70%;
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
  font-size: 4rem;
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

.main-list {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-header-right img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  border: 0.01rem solid #312e2e;
  border-radius: 5px;
}

.content-header-right a:hover img {
  transform: scale(1.1);
}

.content-header-right a:hover {
  background-color: #E8E8E3;
  color: #212320;
  transform: scale(1.1);
  cursor: pointer;
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
</style>
