<template>
    <div class="main-things">
        <h4>Where I Worked</h4>
        <p>
            I was born in 1991. As a child of the 90s, I had a very analog childhood, full of physical activities
            and completely disconnected from technology. However, whenever I had the chance and access,
            I enjoyed playing video games. The first one I fell in love with was the Super Nintendo, followed by the
            PlayStation.
            That’s where my passion for technology began. Since then, I had considered pursuing something related to
            technology,
            but this desire came a bit late—at 28, when I started my degree in Systems Analysis and Development.


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
            <h3>Professional Profile</h3>
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
        <div class="conteudo-embaixo">
        </div>

    </div>
</template>

<style>
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
}

.main-things p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    text-align: justify;
    font-family: 'Arial', sans-serif;
}

.main-things p:first-of-type {
    margin-top: 10px;
}

.main-things p:last-of-type {
    margin-bottom: 10px;
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
    align-items: center;
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
    font-family: 'Arial', sans-serif;
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

/* Responsividade para mobile */
@media (max-width: 768px) {
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
  .main-things {
    width: 98%;
    max-width: 98%;
    padding: 10px;
  }

  .main-things h4 {
    font-size: 1.3rem;
  }

  .main-things p {
    font-size: 0.85rem;
  }

  .main-about-container {
    width: 98%;
    max-width: 98%;
    padding: 10px;
  }

  .main-about-container h4 {
    font-size: 1.3rem;
  }

  .main-title-about h3 {
    font-size: 1.2rem;
  }

  .main-title-about p {
    font-size: 0.85rem;
  }

  .quadrado-dados {
    padding: 12px;
  }

  .quadrado-dados p {
    font-size: 0.85rem;
  }
}
</style>
