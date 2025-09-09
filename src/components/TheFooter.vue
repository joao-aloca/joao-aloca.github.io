<script setup lang="ts">
import Direitos from './Direitos.vue';
import IconEmail from './icons/IconEmail.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconWhatsapp from './icons/IconWhatsapp.vue';

</script>

<template>
    <div class="footer-container">
        <div class="section">
            <img src="/src/assets/img/logo-text-nobg.png" alt="logo_annortech_soluções_em__ti">
        </div>
       
        <div class="section">
            <h2 class="section-titulo">NAVEGAÇÃO</h2>
            <ul>
                <li class="lista-item">
                    <RouterLink to="/">Página inicial</RouterLink>
                </li>
                <li class="lista-item">
                    <RouterLink to="/servicos">Nossos serviços</RouterLink>
                </li>
                <li class="lista-item">
                    <RouterLink to="/sobre">Sobre nós</RouterLink>
                </li>
                <li class="lista-item">
                    <RouterLink to="/contato">Fale conosco</RouterLink>
                </li>
            </ul>
        </div>
       
        <div class="section">
            <h2 class="section-titulo">PRIVACIDADE</h2>
            <ul>
                <li class="lista-item">
                    <RouterLink to="/">Política de privacidade</RouterLink>
                </li>
                <li class="lista-item">
                    <RouterLink to="/">Proteção de dados</RouterLink>
                </li>
                <li class="lista-item">
                    <RouterLink to="/">Segurança</RouterLink>
                </li>
            </ul>
        </div>
       
        <div class="section">
            <h2 class="section-titulo">CONTATE-NOS</h2>
            <ul>
                <li class="lista-item">
                    <a href="mailto:annortech@outlook.com">
                        <IconEmail/> 
                        <div>annortech@outlook.com</div>
                    </a>
                </li>
                <li class="lista-item">
                    <a href="https://wa.me/+5511955401791">
                       <IconWhatsapp/>
                       <div>(11) 95540-1791</div>
                    </a>
                </li>
            </ul>
        </div>
       
        <div class="section">
            <h2 class="section-titulo">SIGA-NOS</h2>
            <ul>
                <li class="lista-item">
                    <a href="https://www.instagram.com/annortech/" target="_blank" rel="noreferrer noopener">
                        <IconInstagram/>
                        <div>@annortech</div>
                    </a>
                </li>
            </ul>
        </div>
       
    </div>
    <Direitos/>
</template>

<style scoped>
.footer-container {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 100px;
    padding: 80px 0;
    background-color: var(--color-background-dark);
    color: var(--color-text-light);
}

.section-titulo {
    margin-bottom: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--color-text-light);
    letter-spacing: 0.2rem;
}

.lista-item {
    padding: 10px 0;
}

a {
    display: flex;
    flex-direction: row;
    gap: 13px;
    align-items: center;
    font-size: 1rem;
    color: var(--color-text-light);
    font-weight: lighter;
}

img {
    height: 60px;
}
</style>
