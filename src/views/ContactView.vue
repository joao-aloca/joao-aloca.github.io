<script setup>
import FormContact from '@/components/FormContact.vue';
import IconEmailDark from '@/components/icons/IconEmailDark.vue';
import IconWhatsappDark from '@/components/icons/IconWhatsappDark.vue';
</script>

<template>
    <div class="contact-container">
        <div class=" contatos">
            <h2 class="contatos-titulo">Entre em contato com a nossa equipe</h2>
            <div>
                <p class="contatos-paragrafo">
                    Preencha o formulário ao lado com suas informações e detalhes sobre sua solicitação. Se preferir, entre em contato conosco através do WhatsApp para uma comunicação ainda mais prática e ágil, ou envie um email, e responderemos o mais breve possível.
                </p>
                <!-- <p class="contatos-paragrafo">
                    Se preferir, entre em contato conosco através do WhatsApp para uma comunicação ainda mais prática e ágil, ou envie um email, e responderemos o mais breve possível.
                </p> -->
                <p class="contatos-paragrafo">
                    Estamos prontos para te ouvir e oferecer todo o suporte necessário!
                </p>
                <!-- <p class="contatos-paragrafo">
                    Conte com a gente para encontrar as melhores soluções!
                </p> -->
            </div>
            <ul class="contatos-lista">
                <li class="lista-item">
                    <a href="mailto:annortech@outlook.com">
                        <IconEmailDark />
                        <h3>annortech@outlook.com</h3>
                    </a>
                </li>
                <li class="lista-item">
                    <a href="https://wa.me/+5511955401791">
                        <IconWhatsappDark />
                        <h3>(11) 95540-1791</h3>
                    </a>
                </li>
            </ul>
        </div>
        <div class="form-container">
            <FormContact />
        </div>
    </div>
</template>

<style scoped>
.contact-container {
    display: flex;
    flex-direction: row;
    padding: 50px 0;
    justify-content: center;
    gap: 100px;
}

.contatos {
    display: flex;
    flex-direction: column;
    width: 550px;
    gap: 30px;
    padding-left: 20px;
}

.contatos-titulo {
    font-size: 3rem;
    font-weight: 500;
}

.contatos-paragrafo {
    font-size: 1.2rem;
    padding: 8px 0;
    font-weight: 400;
}

.lista-item a {
    display: flex;
    align-items: center;
    color: var(--color-text-dark);
    gap: 10px;
    padding: 5px 0;
}

.form-container {
    width: 600px;
}
</style>