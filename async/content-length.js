const http = require('http')
const serve = http.createServer()

serve.on('request', (req, res) => {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/plain')
      res.setHeader('Content-Length', 8)
      res.write('helloworld')
    }
})

serve.listen('8082', () => {
   console.log('启动成功11 -> ')
})