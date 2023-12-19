const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const cors = require('cors');


server.use(cors());
server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));

const PORT = process.env.PORT || 3001
server.use(router)
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`)
})

module.exports = server