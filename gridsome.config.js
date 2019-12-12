// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Турбаза «Минутка»',
    siteDescription: 'Турбаза «Минутка» — идеальное место отдыха для семейных пар с детьми, молодежных компаний и любителей спортивного отдыха! Уютные номера, в каждом имеются душ и санузел. Из окон открывается живописный вид на лес необыкновенной красоты. Предлагаем посетить сауну на дровах, холодный бассейн, а так-же банька «по деревенски».',

    templates: {
        Post: '/:title',
        //Tag: '/tag/:id'
      },

    plugins: [
        {
          // Create posts from markdown files
          use: '@gridsome/source-filesystem',
          options: {
            typeName: 'Post',
            //path: 'content/posts/*.json',
            path: 'content/posts/*.md',
            /*refs: {
              // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
              tags: {
                typeName: 'Tag',
                create: true
              }
            }*/
          }
        }
    ],
    transformers: {
        //Add markdown support to all file-system sources
        remark: {
          /*externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          anchorClassName: 'icon icon-link',
          plugins: [
            '@gridsome/remark-prismjs'
          ]*/
        }
    }    
}
