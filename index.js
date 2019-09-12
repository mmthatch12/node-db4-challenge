const server = require('./api/server')

const PORT = process.env.PORT || 5400

server.listen(PORT, () => {
    console.log(`Listening on port ${Port}...`)
})