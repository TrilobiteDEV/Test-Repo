const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/checkout/packages/833') {
        response.write("USER SCHEDULED TO BUY VIP RANK");
        response.end();
    }
});

server.listen(6343);
console.log("Listening on port 3000...");