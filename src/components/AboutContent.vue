<template>
    <div class="main-about-container">
        <div class="img-container">
            <img src="/public/foto-perfil2.jpg" alt="Profile Picture">
        </div>
        <div class="card-content">
            <v-card class="custom-card mx-auto my-8" elevation="16">
                <v-card-item>
                    <v-card-title>
                        Professional Profile

                    </v-card-title>

                    <v-card-subtitle>
                        Web Developer since 2021
                    </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                    Graduated in Systems Analysis and Development from Universidade Luterana do Brasil, with a
                    Postgraduate
                    Degree in Software Engineering from Universidade do Vale dos Sinos. Experienced in developing
                    efficient,
                    results-oriented solutions with a focus on web technologies and agile methodologies.
                </v-card-text>
            </v-card>
            <v-divider :thickness="4"></v-divider>
            <v-card class="custom-card mx-auto my-8" elevation="16">
                <v-card-item>
                    <v-card-title>
                        Technical Skills
                    </v-card-title>

                    <v-card-subtitle>
                        Programming Languages
                    </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                    HTML, CSS, JavaScript, PHP, SQL
                </v-card-text>
            </v-card>
        </div>

    </div>
</template>

<style scoped>
.main-about-container {
    display: flex;
    flex-direction: row;
}

.img-container {
    display: flex;
    flex-direction: column;
    width: 35%;
    min-height: 100vh;
}

.custom-card {
    max-width: none !important;
    width: auto;
}
.card-content {
    display: flex;
    flex-direction: row;

}
::v-deep .custom-card {
    
}
</style>
