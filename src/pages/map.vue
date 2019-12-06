<template>
    <Layout>
        <h1>Навигация</h1>
        <div class="white-bg">
            <p>
                Россия, Башкортостан с. Новоабзаково<br>
                Мы находимся на 50 км Белорецкого шоссе, в 2.5 км от горнолыжного курорта.
            </p>
        </div>

        <yandex-map :settings="settings" :coords="coords" zoom="15">
            <ymap-marker 
                marker-id="123" 
                :coords="coords"
            />
        </yandex-map>

    </Layout>
</template>

<script>

    //import { loadYmap } from 'vue-yandex-maps'
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'

    export default{
        metaInfo: {
            title: 'Контакты'
        },
        data(){
            return {
                settings: {
                    apiKey: '2c658409-9e06-40b5-b837-a048b3f05443',
                    lang: 'ru_RU',
                    coordorder: 'latlong',
                    version: '2.1'
                },
                coords: [53.80,58.648],
                markerIcon: {
                  layout: 'default#imageWithContent',
                  imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
                  imageSize: [43, 43],
                  imageOffset: [0, 0],
                  content: 'Турбаза Минутка',
                  contentOffset: [0, 15],
                  contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                }
            }
        },
        components: { yandexMap, ymapMarker },
    }
</script>

