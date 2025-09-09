<script setup>
import ButtonServicos from '@/components/ButtonServicos.vue';
import ButtonContato from '@/components/ButtonContato.vue';
</script>

<template>
    <div class="homeview-container">
        <!-- <h1 class="homeview-titulo">Serviços e Soluções em T.I.</h1> -->
        <h2 class="homeview-subtitulo">
            Unimos tecnologia e estratégia para converter seus desafios em oportunidades de crescimento
        </h2>
        <div class="botoes-navegacao">
            <ButtonServicos />
            <ButtonContato />
        </div>
    </div>
</template>

<style scoped>
.homeview-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    background-image: url('/src/assets/img/bg-main.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
}

/* .homeview-titulo {
color: var(--blue-6);
font-size: 2rem;
} */

.homeview-subtitulo {
    font-family: "Montserrat", sans-serif;
    color: var(--color-text-light);
    font-size: 4.5rem;
    font-weight: 500;
    text-align: center;
    padding: 0 5%;
}

.botoes-navegacao {
    display: flex;
    flex-direction: row;
    gap: 40px;
}

</style>