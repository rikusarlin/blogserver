const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

let port = config.PORT
if(port === undefined){
  port = 8080
}

server.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})
