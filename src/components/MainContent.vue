<template>
  <div class="main-header">
    <div class="content-header-left">
      <div class="main-title">
        <h1 class="white--text">Charles Müller</h1>
      </div>
      <div class="main-content-data">
        <div class="content-text">
          <p>
            A web developer passionate about creating innovative digital solutions. My journey in
            development began in 2021, and since then, I have been dedicated to enhancing my skills and
            contributing to meaningful projects.
          </p>
        </div>
        <div class="data-box">
          <div class="image-job-title">
            <img src="/foto-perfil.jpg" alt="">
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
  
  <!-- Seção About -->
  <section id="about-section" class="about-section">
    <div class="main-things">
        <h4>About me</h4>
        <p>
            I was born in 1991. As a child of the 90s, I had a very analog childhood, full of physical activities
            and completely disconnected from technology. However, whenever I had the chance and access,
            I enjoyed playing video games. The first one I fell in love with was the Super Nintendo, followed by the
            PlayStation. That's where my passion for technology began. Since then, I had considered pursuing something related to
            technology, but this desire came a bit late—at 28, when I started my degree in Systems Analysis and Development.
        </p>
        <p>
            Today, in 2025, I am a web developer and hold a postgraduate degree in Software Engineering.
            I have been married for six years to a wonderful wife who supports me in everything, and we have three dogs
            that I love dearly.
        </p>
    </div>
    <div class="main-about-container">
        <h4>Skills</h4>
        <div class="main-title-about">
            <p>
                Web Developer since 2021.
                Graduated in Systems Analysis and Development from Universidade Luterana do Brasil,
                with a Postgraduate Degree in Software Engineering from Universidade do Vale dos Sinos.
                Experienced in developing efficient, results-oriented solutions with a focus on web technologies
                and agile methodologies.
            </p>
        </div>
        <div class="quadrados">
            <div class="quadrado-dados">
                <img src="/src/assets/skill.svg" alt="skills icon">
                <p>Technical Skills</p>
                <div>
                    HTML, CSS, JavaScript, PHP, SQL
                    <p>
                        <span class="skill-level">Advanced</span>
                    </p>
                </div>
            </div>
            <div class="quadrado-dados">
                <img src="/src/assets/library.svg" alt="framework and library icon">
                <p>Frameworks and Libraries</p>
                <div>
                    Docker, Vue.js, Laravel, React, Bootstrap
                    <p>
                        <span class="skill-level">Advanced</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section>
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: transparent;
}

.main-about a:hover {
  background-color: #4a90e2;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

.main-about a:hover img {
  filter: brightness(0) invert(1);
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
  .main-header {
    margin: 10px auto;
    padding: 0 10px;
  }

  .main-title h1 {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  .content-text p {
    font-size: 0.85rem;
    padding: 0 10px;
  }

  .main-about {
    gap: 12px;
    flex-wrap: wrap;
  }

  .data-box img {
    width: 35px;
    height: 35px;
  }

  .image-job-title p {
    font-size: 0.9rem;
  }
}

@media (max-width: 360px) {
  .main-title h1 {
    font-size: 1.6rem;
  }

  .content-text p {
    font-size: 0.8rem;
    padding: 0 5px;
  }

  .main-about {
    gap: 10px;
  }

  .data-box img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 320px) {
  .main-header {
    margin: 5px auto;
    padding: 0 5px;
  }

  .main-title h1 {
    font-size: 1.4rem;
  }

  .content-text p {
    font-size: 0.75rem;
  }

  .main-about {
    gap: 8px;
  }

  .data-box img {
    width: 28px;
    height: 28px;
  }

  .image-job-title p {
    font-size: 0.8rem;
  }
}

/* Estilos para a seção About */
.about-section {
  background-color: #FFFCF5;
  padding: 60px 0;
  margin-top: 40px;
}

.main-things {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 78%;
  max-width: 1080px;
  margin: 40px auto;
  padding: 20px;
  align-items: flex-start;
}

.main-things h4 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
  width: 100%;
}

.main-things p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: justify;
  font-family: var(--font-primary);
}

.main-about-container {
  display: flex;
  flex-direction: column;
  background-color: #FFFCF5;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 78%;
  max-width: 1080px;
  margin: 30px auto;
}

.main-about-container h4 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  align-self: flex-start;
}

.main-title-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
}

.main-title-about h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  align-self: flex-start;
}

.main-title-about p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: justify;
  font-family: var(--font-primary);
  width: 100%;
  align-self: flex-start;
}

.quadrados {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  gap: 20px;
}

.quadrado-dados {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  border: #333 1px solid;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  height: 88px;
}

.quadrado-dados img {
  width: 30px;
  height: 30px;
  border-radius: 25%;
  margin: 0;
}

.quadrado-dados p {
  font-size: 1rem;
  color: #333;
  margin: 0;
  font-weight: bold;
  text-align: left;
}

.skill-level {
  color: #4a90e2;
  font-weight: bold;
}

/* Responsividade para a seção About */
@media (max-width: 768px) {
  .about-section {
    padding: 40px 0;
    margin-top: 20px;
  }

  .main-things {
    width: 95%;
    max-width: 95%;
    margin: 20px auto;
    padding: 15px;
  }

  .main-things h4 {
    font-size: 1.5rem;
    text-align: center;
  }

  .main-things p {
    font-size: 0.9rem;
    text-align: left;
  }

  .main-about-container {
    width: 95%;
    max-width: 95%;
    margin: 20px auto;
    padding: 15px;
  }

  .main-about-container h4 {
    font-size: 1.5rem;
    text-align: center;
  }

  .main-title-about h3 {
    font-size: 1.4rem;
    text-align: center;
  }

  .main-title-about p {
    font-size: 0.9rem;
    text-align: left;
  }

  .quadrados {
    flex-direction: column;
    gap: 15px;
  }

  .quadrado-dados {
    flex-direction: column;
    text-align: center;
    padding: 15px;
    gap: 8px;
  }

  .quadrado-dados img {
    width: 25px;
    height: 25px;
  }

  .quadrado-dados p {
    font-size: 0.9rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 30px 0;
    margin-top: 15px;
  }

  .main-things {
    width: 98%;
    max-width: 98%;
    padding: 15px 10px;
    margin: 20px auto;
  }

  .main-things h4 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  .main-things p {
    font-size: 0.85rem;
    line-height: 1.5;
    text-align: left;
  }

  .main-about-container {
    width: 98%;
    max-width: 98%;
    padding: 15px 10px;
  }

  .main-about-container h4 {
    font-size: 1.3rem;
    text-align: center;
  }

  .main-title-about h3 {
    font-size: 1.2rem;
    text-align: center;
  }

  .main-title-about p {
    font-size: 0.85rem;
    text-align: left;
    line-height: 1.5;
  }

  .quadrado-dados {
    padding: 15px 10px;
    height: auto;
    min-height: 80px;
  }

  .quadrado-dados p {
    font-size: 0.85rem;
  }

  .quadrado-dados img {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 360px) {
  .about-section {
    padding: 25px 0;
  }

  .main-things {
    padding: 10px 8px;
    margin: 15px auto;
  }

  .main-things h4 {
    font-size: 1.2rem;
  }

  .main-things p {
    font-size: 0.8rem;
  }

  .main-about-container {
    padding: 10px 8px;
  }

  .main-about-container h4 {
    font-size: 1.2rem;
  }

  .main-title-about h3 {
    font-size: 1.1rem;
  }

  .main-title-about p {
    font-size: 0.8rem;
  }

  .quadrado-dados {
    padding: 12px 8px;
  }

  .quadrado-dados p {
    font-size: 0.8rem;
  }

  .quadrado-dados img {
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 320px) {
  .about-section {
    padding: 20px 0;
  }

  .main-things {
    padding: 8px 5px;
    margin: 10px auto;
  }

  .main-things h4 {
    font-size: 1.1rem;
  }

  .main-things p {
    font-size: 0.75rem;
  }

  .main-about-container {
    padding: 8px 5px;
  }

  .main-about-container h4 {
    font-size: 1.1rem;
  }

  .main-title-about h3 {
    font-size: 1rem;
  }

  .main-title-about p {
    font-size: 0.75rem;
  }

  .quadrado-dados {
    padding: 10px 6px;
    gap: 6px;
  }

  .quadrado-dados p {
    font-size: 0.75rem;
  }

  .quadrado-dados img {
    width: 20px;
    height: 20px;
  }
}
</style>
