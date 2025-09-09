<script setup></script>

<template>
    <RouterLink to="/servicos">
        <button type="button">Nossos serviços</button>
    </RouterLink>
</template>

<style scoped>
button {
    border: none;
    /* border-style: solid; */
    border-color: var(--blue-1);
    border-radius: 100px;
    color: var(--blue-1);
    font-size: 1.3rem;
    padding: 15px 25px;
    background-color: #cfcfcf;
}

button:hover {
    cursor: pointer;
    color: black;
    background-color: white;
}
</style>