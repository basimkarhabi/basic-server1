const http = require('http');
const messages = ["Hello","World"]

function processRequest(request,response){
         const newMessage=request.url.split("=")[1]
        if(newMessage){
                       messages.push(newMessage.replace(/\+/g," "))            
        } 


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
}

const server = http.createServer(processRequest)

server.listen(process.env.PORT || 8080)
