<script setup>
</script>

<template>
    <nav class="navbar">
        <RouterLink to="/">
            <img src="/src/assets/img/logo-text-nobg.png" alt="logo_annortech">
        </RouterLink>
        <ul class="lista-links">
            <li class="lista-item">
                <RouterLink to="/">Início</RouterLink>
            </li>
            <li class="lista-item">
                <RouterLink to="/servicos">Serviços</RouterLink>
            </li>
            <li class="lista-item">
                <RouterLink to="/sobre">Sobre</RouterLink>
            </li>
            <li class="lista-item">
                <RouterLink to="/contato">Contato</RouterLink>
            </li>
            <li class="lista-item-login">
                <RouterLink to="/login">Acessar conta</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar,
.lista-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color-background-navbar);
}

.navbar {
    padding: 10px 0;
}

.lista-links {
    gap: 25px
}

.lista-item a, .lista-item-login a {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text-light);
    padding: 10px;
}

.lista-item-login a {
    padding: 15px 30px;
    margin-left: 50px;
    border-style: solid;
    border-radius: 12px;
    background: var(--blue-2);
}

.lista-item-login a:hover {
    background: var(--blue-4);
}

img {
    height: 60px;
}
</style>