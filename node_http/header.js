/**
 * Header HTTP
 * 
 * HTTP header permintaan memberikan informasi tentang permintaan,
 * respon, atau badan transisi lainya
 * 
 * 
 * pada bagian ini akan memperkenalkan header respon HTTP tertentu.
 * belajar menerima otentikasi
 */

const http = require("http");

const server = http.createServer((req, res) => {

    let dataHeader, //* Akan menampung object header request
    dataAutorization, //* Berisi properti dari object header
    splitData, //* Pemisah atau pembatas antara value autorization
    dataUser, //* Kode dengan base64 to str
    dataResponse;

    res.setHeader("Content-Type", "application/json");

    //* ini untuk mendapatkan hasil berupa json
    dataHeader = req.headers;

    console.log(dataHeader);

    //! get data otorisasi
    dataAutorization = dataHeader.authorization;

    //* jik aurhorizationnya tidak terkirim maka akan menghasilkan :

    if(!dataAutorization){
        dataResponse = {
            data: "UnUndifined Authorization"
        };

        // send ke client dan return agar berhasil
        return res.end(JSON.stringify(dataResponse));
    }

    splitData = dataAutorization.split(" ");

    dataUser = splitData[1];

    userPass = Buffer.from(dataUser, "base64").toString();

    //! Create respon berisi nilai dan userPass
    dataResponse = {
        token: dataHeader.authorization,
        userPass,
    };

    return res.end(JSON.stringify(dataResponse))

});

server.listen(5000)
