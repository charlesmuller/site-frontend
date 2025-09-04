<template>
    <div class="main-things">
        <h4>Work history</h4>
        <p>
            I started my professional journey in 2007 as an intern in a supermarket, working with product organization.
            After one year, I was promoted and began managing the produce department, a position I held for two years,
            developing leadership and operational management skills.
        </p>
        <p>
            In 2010, I joined the Brazilian Air Force, where I served for four years. During this time, I gained
            valuable experience in teamwork, leadership in challenging situations, and the ability to remain calm and
            efficient under pressure.
        </p>
        <p>
            In 2015, I joined CIEE-RS, where I worked for six years. My journey started as an intern and evolved into
            roles as an assistant and later as an administrative assistant. This was a period of great learning, especially in
            developing communication skills and working directly with the public.
        </p>
        <p>
            Starting in 2021, I began my career in the technology field. I initially worked as an intern in technical
            support, and after being promoted, I served as a support analyst. In 2022, I reached an important milestone by
            starting my journey as a web developer, combining my passion for innovation with my professional experience to create
            efficient and impactful solutions.
        </p>
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
    font-family: var(--font-primary);
}

.main-things p:first-of-type {
    margin-top: 10px;
}

.main-things p:last-of-type {
    margin-bottom: 10px;
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
  }

  .main-things p {
    font-size: 0.9rem;
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
}
</style>