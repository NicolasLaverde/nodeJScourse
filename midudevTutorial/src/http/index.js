const http = require('node:http')
const { findAvailablePort } = require('./free-port')

const desiredPort = process.env.PORT ?? '8080'

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listeing on port ${server.address().port}`)
  })
})
