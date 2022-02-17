/**
 * Routing dengan methods
 */

const http = require("http")

const server = http.createServer((req, res) => {
    let url,
        method,
        dataResponse

    res.setHeader('Content-Type', 'application/json')

    url = req.url

    //*jika method tidak di isi, maka isi dengan method get
    method = req.method ?? "get"

    //! Routing
    if(url === "/") {
        dataResponse = {
            data: "Ini adalah halaman HomePage"
        }
    } else if(url === "/login") {

        if(method === "POST") {
            dataResponse = {
                data: "Anda berhasil login dengan menggunakan methos post"
            }
        }else{
            dataResponse = {
                data : "Maaf, ubah terlebih dahulu method menjadi POST"
            }
        }
    }else{
        dataResponse = {
            data : "404, Halaman tidak tersedia"
        }
    }
    return res.end(JSON.stringify(dataResponse))
})

server.listen(5000)