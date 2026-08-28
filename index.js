const app = require ('express')
const server = app()
const PORT = 3000
const HOSTNAME = '0.0.0.0'
server.listen(PORT, HOSTNAME, () => {
    console.log('server is running in ${HOSTNAME}:${PORT}')
})