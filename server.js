const http = require('http');

//console.log("Hello World")

//creatServer
// listener that waits for request
const server = http.createServer((requests,response)=> {
    response.write("<h1>Hello User Basem in Node</h1>")
    response.end()
})

//start the server/ wait for requests on prot 8080
server.listen(process.env.PORT || 8080)
