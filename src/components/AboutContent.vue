<template>
    <div class="main-things">
        <h4>Where I Worked</h4>
        <p>
            I started my professional journey in 2007 as an intern in a supermarket, working with product organization.
            After one year, I was promoted and began managing the produce department, a position I held for two years,
            developing leadership and operational management skills.
        </p>
        <p>
            In 2010, I joined the Brazilian Air Force, where I served for four years. During this time, I gained
            valuable
            experience, such as teamwork, leadership in challenging situations, and the ability to remain calm and
            efficient
            under pressure.
        </p>
        <p>
            In 2015, I joined CIEE-RS, where I worked for six years. My journey started as an intern and evolved into
            roles
            as an assistant and later as an administrative assistant. This was a period of great learning, especially in
            developing communication skills and working directly with the public.
        </p>
        <p>
            Starting in 2021, I began my career in the technology field. I initially worked as an intern in technical
            support,
            and after being promoted, I served as a support analyst. In 2022, I reached an important milestone by
            starting my
            journey as a web developer, combining my passion for innovation with my professional experience to create
            efficient
            and impactful solutions.
        </p>
    </div>
    <div class="main-about-container">
        <h4>Skills</h4>
        <div class="main-title-about">
            <h4>Professional Profile</h4>
        </div>
        <div>
            <p>
                Web Developer since 2021.
                Graduated in Systems Analysis and Development from Universidade Luterana do Brasil,
                with a Postgraduate Degree in Software Engineering from Universidade do Vale dos Sinos.
                Experienced in developing efficient, results-oriented solutions with a focus on web technologies
                and agile methodologies.
            </p>
        </div>
        <div>
            <div class="primeiro-quadrado">
                <h4>Technical Skills</h4>
            </div>
            <div>
                <div></div>
                <div>
                    <div>
                        HTML, CSS, JavaScript, PHP, SQL
                        <p></p>
                    </div>

                </div>
            </div>
            <div class="segundo-quadrado">
                Frameworks and Libraries
                Docker, Vue.js, Laravel, React, Bootstrap

            </div>
        </div>
        <div class="conteudo-embaixo">
        </div>

    </div>

    <RigthMenu />
</template>

<script>
import RigthMenu from './RigthMenu.vue';

export default {
    components: {
        RigthMenu
    }
};
</script>

<style>
.main-things {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 80%;
    max-width: 72%;
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
    width: 80%;
    max-width: 70%;
    margin: 30px auto;
    align-items: center;
}

.custom-card {
    max-width: none !important;
    width: auto;
}

.card-content {
    display: flex;
    flex-direction: column;
}
</style>
