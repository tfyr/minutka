<template>
  <Layout>
    <h1>Фото-галерея</h1>

    <form method="POST" action="https://minutka.herokuapp.com/v2/entry/tfyr/minutka/gh-pages/comments">
      <input name="options[redirect]" type="hidden" value="https://my-site.com">
      <!-- e.g. "2016-01-02-this-is-a-post" -->
      <input name="options[slug]" type="hidden" value="page.slug">
      <label><input name="fields[name]" type="text">Name</label>
      <label><input name="fields[email]" type="email">E-mail</label>
      <label><textarea name="fields[message]"></textarea>Message</label>
      
      <button type="submit">Go!</button>
    </form>


  </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Фото-галерея'
    },
    data(){
        return {
            slug: 'test',
        }
  },
}
</script>
