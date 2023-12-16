// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
// server.use(jsonServer.rewriter({
//     '/api/*': '/$1',
//     '/product/:resource/:id/show': '/:resource/:id'
// }))

const PORT = process.env.PORT || 3000
server.use(router)
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`)
})

// Export the Server API
module.exports = server