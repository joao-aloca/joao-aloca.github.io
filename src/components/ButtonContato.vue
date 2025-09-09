<script setup></script>

<template>
    <RouterLink to="/contato">
        <button type="button">Entrar em contato</button>
    </RouterLink>
</template>

<style scoped>
button {
    border: none;
    border-color: var(--blue-1);
    border-radius: 100px;
    color: var(--color-text-light);
    font-size: 1.3rem;
    padding: 15px 25px;
    background-color: var(--blue-1);
}

button:hover {
    cursor: pointer;
    color: white;
    background-color: var(--blue-6);
}
</style>