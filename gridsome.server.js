// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const posts = require('./src/assets/album1.json')

module.exports = function (api) {
    api.loadSource(({ addCollection }) => {
	    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
	    // Use the Pages API here: https://gridsome.org/docs/pages-api/
	})


	api.loadSource(store => {
	    const contentType = store.addContentType({
	        typeName: 'Posts'
	    })

	    for (const item of posts) {
	        contentType.addNode({
	        	id: item.id,
	        	title: item.title,
	        	href: item.href
	        })
	    }
	})  
}
