/**
 * jawaban
 */

const abdi = require("http")

const rabbani = abdi.createServer((req, res) => {
    let url,
    method,
    dataResponse

    res.setHeader('Content-Type', 'application/json')

    url = req.url

    method = req.method ?? "get"

    if(url == '/home'){
        dataResponse = {
            data : "anda masuk ke halaman home"
        }
    }else if(url == '/about'){
        dataResponse = {
            data : "anda masuk ke halaman about"
        }
    }else if(url == '/form'){
        dataResponse = {
            data : "anda masuk ke halaman form"
        }
    }else if(url == '/mengirim_data'){
        if(method == 'POST'){
            dataResponse = {
                data : "anda berhasil mengirim data"
            }
        }else{
            dataResponse = {
                data : "tolong gunakan method POST"
            }
        }
    }else{
        dataResponse = {
            data : "404, not found"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

rabbani.listen(1010)