const http = require('http')
const bubblesort = require('./bubblesort')

const hostname = '127.0.0.1'
const port = '3000'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('Results in console\n')
    bubblesort.main()
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})