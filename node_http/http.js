/**
 * Core modul : http
 * 
 * membuat server menggunakan modul http
 */


const http = require("http");

const server = http.createServer((req, res) => {
    //! Inisialisasi variable yang akan digunakan
    let data;

    console.log(req);

    /**
     * objek request itu banyak, tapi yang di pakai itu cuma 3
     * url, method, headers.
     */


    //!Create object yang berisi url, method dan header
    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    //! Ini akan mengubah set response menjadi berupa data json
    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify(data))

});

server.listen(3000)