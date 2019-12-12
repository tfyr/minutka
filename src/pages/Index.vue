<template>
    <Layout>
        <div class="layout">
            <!-- Learn how to use images here: https://gridsome.org/docs/images >
            <g-image alt="Example image" src="~/favicon.png" width="135" /-->

            <h1 class="title">Добро пожаловать</h1>

            <div class="white-bg">
                Турбаза «Минутка» — идеальное место отдыха для семейных пар с детьми, 
                молодежных компаний и любителей спортивного отдыха! 
                Уютные номера, в каждом имеются душ и санузел. Из окон открывается живописный вид на лес необыкновенной красоты.
                Предлагаем посетить сауну на дровах, холодный бассейн, а так-же банька «по деревенски».
            </div>

            <!--p class="home-links">
                <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
                <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
            </p-->
        </div>
    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Главная'
        }
    }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }
</style>
