<template>
    <div class="main-things">
        <h4>Where I Worked</h4>
        <p>
            I started my professional journey in 2007 as an intern in a supermarket, working with product organization. 
            After one year, I was promoted and began managing the produce department, a position I held for two years, 
            developing leadership and operational management skills.
        </p>
        <p>
            In 2010, I joined the Brazilian Air Force, where I served for four years. During this time, I gained valuable 
            experience, such as teamwork, leadership in challenging situations, and the ability to remain calm and efficient 
            under pressure.
        </p>
        <p>
            In 2015, I joined CIEE-RS, where I worked for six years. My journey started as an intern and evolved into roles 
            as an assistant and later as an administrative assistant. This was a period of great learning, especially in 
            developing communication skills and working directly with the public.
        </p>
        <p>
            Starting in 2021, I began my career in the technology field. I initially worked as an intern in technical support, 
            and after being promoted, I served as a support analyst. In 2022, I reached an important milestone by starting my 
            journey as a web developer, combining my passion for innovation with my professional experience to create efficient 
            and impactful solutions.
        </p>
    </div>
</template>

<style>
.main-things {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Add spacing between paragraphs */
    width: 80%;
    max-width: 72%;
    margin: 40px auto;
    padding: 20px;
    align-items: flex-start;
}

.main-things h4 {
    font-size: 1.8rem;
    color: #333; /* Darker color for heading */
    margin-bottom: 15px;
    font-weight: bold;
    text-align: center; /* Center align the heading */
}

.main-things p {
    font-size: 1rem;
    color: #555; /* Subtle color for readability */
    line-height: 1.6; /* Better line spacing */
    text-align: justify; /* Justify the paragraph text */
    font-family: 'Arial', sans-serif; /* Modern font style */
}

.main-things p:first-of-type {
    margin-top: 10px;
}

.main-things p:last-of-type {
    margin-bottom: 10px;
}
</style>
