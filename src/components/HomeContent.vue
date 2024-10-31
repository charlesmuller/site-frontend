<template>
    <v-container fluid class="hero" style="background-color: #E0F7FA;">
        <v-row justify="center" align="center">
            <v-card class="text-card" variant="tonal">
                <div class="content">
                    <div class="img-container">
                        <img src="/public/foto-perfil2.jpg" alt="Charles Müller" />
                    </div>
                    <div class="text-content">
                        <v-card-title class="title">Hello! I am Charles Müller</v-card-title>
                        <v-card-text class="card-description">
                            A web developer passionate about creating innovative digital solutions. My journey in development
                            began in 2021, and since then, I have been dedicated to enhancing my skills and contributing to
                            meaningful projects.
                        </v-card-text>
                    </div>
                </div>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomeContent'
};
</script>

<style scoped>
.hero {
    min-height: 76vh;
    display: flex;
    flex-direction: column;
    background-size: cover; /* Para cobrir todo o espaço */
    background-position: center; /* Para centralizar a imagem */
    color: white; /* Para melhorar a legibilidade */
}

.text-card {
    padding: 2rem; /* Adiciona espaçamento interno */
    border-radius: 12px; /* Bordas arredondadas */
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.7); /* Sombra para profundidade */
    backdrop-filter: blur(30px); /* Efeito de desfoque de fundo */
    color: black;
}

.content {
    display: flex; /* Para organizar a imagem e o texto lado a lado */
    align-items: center; /* Alinha verticalmente */
}

.img-container {
    margin-right: 1rem; /* Espaçamento à direita da imagem */
}

.img-container img {
    width: 250px; /* Ajuste conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 50%; /* Faz a imagem ficar redonda */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Sombra na imagem */
}

.title {
    font-size: 3rem; /* Aumenta o tamanho do título */
    font-weight: bold; /* Destaca o título */
    margin-bottom: 1rem; /* Espaço abaixo do título */
}

.card-description {
    font-size: 1.5rem;
    line-height: 1.7rem;
}
</style>
