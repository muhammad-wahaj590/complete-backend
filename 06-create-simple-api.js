// "Simple and basic API"

const http = require('http')
const data = require('./06-api-data')
http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'application/json'});
    res.write(JSON.stringify(data))
    res.end()
}).listen(3000)


// yeh hamne static api data rakha hai 

// .writeHead()  is k 2 params hoty (1: response ka code kia jaye ga jo hota hai 200, 2: or jis type kaa aap data send karo ge ) 
// 200 dalne ka matlab hai ki client ko yeh batana ki sab kuch theek hai aur response ready hai.