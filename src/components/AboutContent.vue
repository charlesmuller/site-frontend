<template>
    <div class="main-about-container">
        <v-row align="center" justify="center" dense>
            <v-col cols="12">
                <v-card class="mx-auto" prepend-icon="mdi-account"
                    subtitle="Web Developer since 2021" title="Professional Profile">
                    <v-card-text>
                        Graduated in Systems Analysis and Development from Universidade Luterana do Brasil,
                        with a Postgraduate Degree in Software Engineering from Universidade do Vale dos Sinos. 
                        Experienced in developing efficient, results-oriented solutions with a focus on web technologies and agile methodologies.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card class="mx-auto" subtitle="Programming Languages" title="Technical Skills">
                    <template v-slot:prepend>
                        <v-icon color="primary" icon="mdi-account"></v-icon>
                    </template>
                    <v-card-text>HTML, CSS, JavaScript, PHP, SQL</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card class="mx-auto" subtitle="" title="Frameworks and Libraries">
                    <template v-slot:prepend>
                        <v-avatar color="blue-darken-2">
                            <v-icon icon="mdi-alarm"></v-icon>
                        </v-avatar>
                    </template>
                    <v-card-text>Docker, Vue.js, Laravel, React</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.main-about-container {
    display: flex;
    flex-direction: column;
    background-color: #FFFCF5;
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
