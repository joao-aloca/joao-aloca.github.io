<script setup lang="ts">
import IconCopyright from './icons/IconCopyright.vue';
</script>

<template>
    <div class="copyright-container">
        <p>Copyright <span><IconCopyright/></span> 2025 Annortech. Todos os direitos reservados.
        </p>
    </div>
</template>

<style scoped>
.copyright-container {
    padding: 20px 0;
    text-align: center;
    background-color: var(--color-background-dark);
}

p {
    color: var(--color-text-light);
    font-family: "Rubik", sans-serif;
    font-size: .8rem;
}
</style>