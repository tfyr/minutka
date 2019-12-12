<template>
    <Layout>
        <div class="hero">
            <h1>Фото-галерея</h1>
            <!--div>{{ album1 }}</div>
            <div>1 {{ $page.allPost.edges }} 2</div-->
            <div style="width: 100%">
            <ul class="photos">
                <li v-for="edge in $page.allPost.edges" :key="edge.node.id">
                    <g-image alt="image" :src="edge.node.image" />
                </li>
            </ul>
            </div>

            <!--form method="POST" action="https://minutka.herokuapp.com/v2/entry/tfyr/minutka/gh-pages/comments">
                <input name="options[redirect]" type="hidden" value="https://my-site.com">
                <input name="options[slug]" type="hidden" value="page.slug">
                <label><input name="fields[name]" type="text">Name</label>
                <label><input name="fields[email]" type="email">E-mail</label>
                <label><textarea name="fields[message]"></textarea>Message</label>
                <button type="submit">Go!</button>
            </form-->
        </div>
    </Layout>
</template>

<page-query>
    query{
        allPost {
            edges {
                node {
                    id
                    path
                    image (width: 420, height: 200, quality: 90, fit: inside)
                }
            }
        }
    }
</page-query>

<script>
    //import album1 from '@/assets/album1.yaml'
    export default {
        metaInfo: {
            title: 'Фото-галерея'
        },
        /*data(){
            return {
                album1
            }
        },*/
    }
</script>

<style lang="scss">
    .hero{
        margin: 0 .5rem;
    }
    ul.photos{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        margin: 1rem -.5rem;
        li{
            padding: 0;
            margin: 0;
            line-height: 0;
        }
        img {
            margin: .5rem;
        }
    }
</style>