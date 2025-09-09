<script setup lang="ts"></script>

<template>
    <form action="https://api.web3forms.com/submit" method="POST" id="form">

        <input type="hidden" name="access_key" value="b275821f-12b6-4014-a051-233a7b65de63">
        <input type="hidden" name="subject" value="Novo Preenchimento de Formulário" id="subjectInput">
        <input type="checkbox" name="botcheck" id="" style="display: none;">

        <!-- Custom Form Data -->
        <input type="text" name="name" placeholder="*Nome ou razão social" required>
        <input type="email" name="email" placeholder="*Email" required>
        <input type="text" name="phone" placeholder="*Telefone" required>
        <textarea name="message" placeholder="*Mensagem" required></textarea>

        <button type="submit">Enviar</button>

        <!-- <input type="hidden" name="redirect" value="https://yourwebsite.com/thanks.html"> -->

        <div id="result"></div>

    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

input,
textarea {
    padding-left: 13px;
    border: 2px;
    border-style: solid;
    border-color: rgb(159, 159, 159);
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    font-weight: 500;
    padding-left: 15px;
}

input {
    margin: 8px 0;
    height: 35px;
}

textarea {
    margin: 8px 0;
    height: 200px;
    padding-top: 10px;
}

button {
    margin-top: 25px;
    height: 50px;
    background-color: var(--color-background-dark);
    color: var(--color-text-light);
    font-size: 1rem;
}

button:hover {
    cursor: pointer;
    background-color: var(--blue-2);
}
</style>