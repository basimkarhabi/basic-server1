const http = require('http');
const messages = ["Hello","World"]
let APIResult = {}
//import function but we got an object when we import that the way we write here we could make destrctchure {nameFunction}
//way 1
//const calc = require('./action/multiplication')
//console.log(calc.multiplication(2,2))
//way 2 with destractury
//const {multiplication} = require('./action/multiplication')
//console.log(multiplication(2,2))
//const { async } = require('q');
//const { write } = require('fs');
/*
//first way with http module 
*/
//5 we make the response it 
//second way with axios
//axios 1- install axios 2- import it 3- uase it like this 
const axios = require('axios')
//axios.get("http://dummy.restapiexample.com/api/v1/employee/1")
  //      .then(response => {
    //            console.log(response)
      //  })
// we could use wait 
async function getEmployee(){
      const APIResult = await axios.get("http://dummy.restapiexample.com/api/v1/employee/1")
    console.log(APIResult)
}
getEmployee()
/*
http.request("http://dummy.restapiexample.com/api/v1/employee/1",response => {
        let res = ''
        response.on('data',chunk => {
                res += chunk
        })
        response.on('end',()=>{
                APIResult = JSON.parse(res).data  // we make the date hwr to enter to it direcktliy
                console.log(APIResult.employee_name)
        })

}).end()
*/

function processRequest(request,response){     
        response.setHeader('Content-Type', 'text/html');
        if (request.url=="/about"){
                response.write(`
                        <h1>About us</h1>
                        <p> we  are try the best </p>
                `)

        }else if (request.url == "/api"){
                response.write(`
                <h1>${APIResult.employee_name}</h1>
                <p> Salary : ${APIResult.employee_salary}</p>
                <p> Age : ${APIResult.employee_age}</p>
                `)

        } else {            
                const newMessage=request.url.split("=")[1]
                if(newMessage){
                        messages.push(newMessage.replace(/\+/g," "))            
                } 
                response.write(`
                        <h1>Hi Basem </h1>
                        <form method ="GET" action="/"> 
                        <input type ="text" name="message"> 
                        </form>
                `)       
                messages.forEach( m => {
                        response.write(`<p>${m}</p>`)
                })
        }
        response.end()
}

        const server = http.createServer(processRequest)
const port = process.env.PORT || process.argv[2] || 8080
server.listen(port,null,()=> console.log("server started on port  " + port))

