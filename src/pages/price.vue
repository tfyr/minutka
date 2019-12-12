<template>
    <Layout>
        <div class="layout">
            <h1>Цены и услуги</h1>
            <div class="white-bg">
                <div class="photo-text">
                    <g-image src="~/assets/images/photo1.jpg" width="240"/>
                    <div>
                        <h3>Отдых на 1 день</h3>
                        <ul>
                            <li>от 200р/чел.</li>
                            <li>Включает съем теплого жилья, мангальную зону.</li>
                        </ul>
                        
                    </div>
                </div>

                <div class="photo-text">
                    <g-image src="~/assets/images/photo2.jpg" width="240" />
                    <div>
                        <h3>Дом для гостей Минутка Абзаково.</h3>
                        <ul>
                            <li>Состоит из двух половин для компаний 12 чел. или для одной компании 24 чел.</li>
                            <li>Так-же возможно расселение по 3-х местным номерам.</li>
                            <li>В доме имеется 2 оборудованные кухни, столовая, сауна на дровах с бассейном и русский бильярд.</li>
                        </ul>
                    </div>
                </div>

                <!--div class="photo-text">
                    <g-image src="~/assets/images/photo3.jpg" width="240" />
                    <div>
                        <h3>Летние домики с мангальными зонами</h3>
                    </div>
                </div-->
         
                <div class="photo-text">
                    <g-image src="~/assets/images/bath.jpg" width="240" />
                    <div>
                        <h3>Банька на дровах</h3>
                        <ul>
                            <li>1000р/2ч</li>
                            <li>Компания до 6 чел. + Бесплатный фиточай</li>
                        </ul>
                    </div>
                </div>
                <p>
                    На территории так-же располагаются: 2 беседки, мангальные зоны, летний детский бассейн, летняя кухня и буфет.
                </p>
            </div>
        </div>
    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Контакты'
        }
    }
</script>

<style lang="scss">
    .photo-text{
        display: flex;
        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
        @media screen and (min-width: 768px) {
            div {
                margin-left: 15px;
            }
        }
        margin-bottom: 2rem;
        h3 {
            margin-top: 0;
        }
        ul{
            padding-left: 0;
            li {
                list-style-type: none;
                &:before{
                    content: '—';
                    padding-right: 10px;
                }
            }
        }

    }
</style>

