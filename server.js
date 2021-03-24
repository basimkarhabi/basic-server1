const http = require('http');
const messages = ["Hello","World"]

//console.log("Hello World")

//creatServer
// listener that waits for request
const server = http.createServer((request,response)=> {
        const newMessage=request.url.split("=")[1]
        if(newMessage){
                       messages.push(newMessage.replace(/\+/g," "))
                       
        } 
         //messages.push(request)

    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <h1>Hi Basem </h1>
    <form method ="GET" action="/"> 
                <input type ="text" name="message"> 
        </form>
    `)       
        
    messages.forEach( m => {
            response.write(`<p>${m}</p>`)
    })
       response.end()
})

//start the server/ wait for requests on prot 8080
server.listen(process.env.PORT || 8080)
