<template>
    <Layout>
        <div class="layout">
            <h1 class="title">Отзывы</h1>

            <div class="opacity-bg">
                <h3>Оставить отзыв</h3>
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
        <!--script>
            function sf(){
                console.log('sf');
            }
        </script-->
    </Layout>
</template>

<script>
    import axios from 'axios'
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
            sf(){
                this.isDisabled=true;
                this.send_msg="Отправление...";
                console.log('vue sf');
                const formData = new FormData();
                formData.append('name', this.name);
                formData.append('text', this.text);

                axios.post('/post_review', formData).then(response => {
                    this.send_msg="Сообщение отправлено";
                    this.text='';
                    setTimeout(() => {
                        this.send_msg = null;
                        this.isDisabled=false;
                    }, 3500);
                });
            }
        }
    }
</script>

<style lang="scss">
    textarea{
        height: 120px;
        min-width: 320px;
    }
    div.form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        label{
            display: inline-grid;        
        }
        input, textarea, button {
            margin-top: 12px;
            font-family: 'Cuprum';
            font-size: 1.33rem;
        }
        button{
            min-width: 200px;
        }
    }
</style>