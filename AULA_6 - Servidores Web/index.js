const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("Funcionou :)");
})

server.listen(8080, ()=>{
    console.log("Listen on port 8080");
});