<template>
    <Layout>
        <div class="layout">
            <h1 class="title">Отзывы</h1>

            <div class="white-bg">
                <ul class="reviews">
                    <li v-for="review in $static.minutka.reviews" :id="review.id">
                        <div class="name">{{review.name}}</div>
                        <div class="pubdate">{{formatDate(review.pubDate)}}</div>
                        <div class="textarea">{{review.text}}</div>
                    </li>
                </ul>
                <h3 class="add-review">Оставить отзыв</h3>
                <div class="form">
                    <input type="text" placeholder="Имя" v-model="name" :disabled='isDisabled'>
                    <textarea  v-model="text"
                        placeholder="Отзыв"
                        :disabled='isDisabled'
                        ></textarea>
                    <button class="button" :disabled='isDisabled' @click="sf">{{send_msg||'Отправить'}}</button>
                </div>

            </div>
            <!--div class="white-bg">
                <p>
                    Сообщения перед публикацией просматриваются администратором.
                </p>
            </div-->
        </div>
    </Layout>
</template>

<static-query>
    query {
        minutka {reviews {name text id pubDate}}
    }
</static-query>

<script>
    import axios from 'axios'
    import { format } from 'date-fns'


    export default {
        metaInfo: {
            title: 'Отзывы'
        },
        data(){
            return {
                'name': null,
                'text': null,
                'send_msg': null,
                'isDisabled': false,
            }
        },
        methods: {
            formatDate(value){
                return format(new Date(value), 'dd.MM.yyyy HH:mm');
            },
            sf(){
                this.isDisabled=true;
                this.send_msg="Отправление...";
                const formData = new FormData();
                formData.append('name', this.name);
                formData.append('text', this.text);

                axios.post('/post_review', formData).then(response => {
                    this.send_msg="Сообщение отправлено";
                    this.text='';
                    setTimeout(() => {
                        this.send_msg = null;
                        this.isDisabled=false;
                    }, 3000);
                });
            }
        }
    }
</script>

<style lang="scss">
    textarea{
        height: 140px;
        width: 100%;
        max-width: 640px;
    }
    div.form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        label{
            display: inline-grid;        
        }
        input, textarea, button {
            margin-bottom: 12px;
            font-family: 'Cuprum';
            font-size: 1.33rem;
        }
        button{
            min-width: 200px;
        }
    }
    h3.add-review{
        margin-bottom: .5rem;
    }
    .reviews{
        list-style-type: none;
        padding-left: 0;
        li{
            margin-bottom: 3rem;
            .name {
                font-size: 1.15em;
            }
            .pubdate{
                font-size: .85em;
                color: #777;

            }
        }
    }
</style>