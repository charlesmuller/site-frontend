<template>
    <v-container fluid class="hero" style="background-color: #E3F2FD;">
        <v-row class="main-card-board">
            <v-card class="text-card" variant="tonal">
                <div class="content">
                    <div class="img-container">
                        <img src="/public/foto-perfil2.jpg" alt="Charles Müller" />
                    </div>
                    <div class="text-content">
                        <v-card-title class="title">Hello! I am Charles Müller</v-card-title>
                        <v-card-text class="card-description">
                            A web developer passionate about creating innovative digital solutions. My journey in
                            development began in 2021, and since then, I have been dedicated to enhancing my skills and
                            contributing to meaningful projects.
                        </v-card-text>
                    </div>
                </div>
            </v-card>
        </v-row>
    </v-container>
</template>

<style scoped>
.hero {
    min-height: 76vh;
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-position: center;
    color: white;
    background-color: #E3F2FD;
    align-items: center;
}

.text-card {
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(30px);
    color: black;
    height: 100%;
}

.content {
    display: flex;
    align-items: center;
}

.img-container {
    margin-right: 1rem;
}

.img-container img {
    width: 250px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.card-description {
    font-size: 1.5rem;
    line-height: 1.7rem;
}

/* Classe para remover o padding do v-card-text */
.no-padding {
    padding: 0 !important;
}

.main-card-board {
    display: flex;
    justify-content: flex-end;
    width: 80%;
}
</style>
