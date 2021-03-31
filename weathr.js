const http = require('http')
let API= { }
http.request("http://api.openweathermap.org/data/2.5/weather?q=London&appid=8d72f79be4dbb97d5fcd36e9878ab5a5",response => {
        let str = ''
        response.on('data',chunk =>{
                str += chunk 
        })

        response.on('end',()=>{
               const API = JSON.parse(str)
               console.log("api",API)

                //console.log("City :",API.name)
                //console.log("Wind :",API.weather)
                //console.log("Wind :",API.main)
               // console.log("Wind :",API.wind)
        })
}).end()

function processRequest(request,response){

        response.setHeader('content-type','text/html')

        if(request.url == "/api"){
                response.write(`        
                <h1>The Weather To day <h1>
                <h4> City :${API.weather} </h4>
                <h4>Today is :${API.weather} </h4>
                <h4>"Wind & tempo :${API.main} </h4>
                <h4>"speed wind :${API.wind} </h4>
                `)

        } else if (request.url == " "){
                response.write(`
                <h1> weather<h1> 
                `)
        }

     response.end()  
} 

const server = http.createServer(processRequest)
const port = process.env.PORT || process.argv[2] || 8080
server.listen(port,null,()=> console.log("server started on port " + port))

