/**
 * Routing
 */

const http = require("http");

const server = http.createServer((req, res) =>{
    let url,
    dataResponse

    res.setHeader("Content-Type", "application/json")
    url = req.url.toLocaleLowerCase()

    //ROUTING
    if(url == "/login"){
        dataResponse = {
            data : "Ini adalah halaman login"
        }
    }else if(url == "/singup"){
        dataResponse = {
            data : " Ini adalah halaman singup"
        }
    }else if(url == "/home"){
        dataResponse = {
            data : "Ini adalah halaman home"
        }
    }else{
        dataResponse = {
            data : "404 NotFound"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

server.listen(4000)

