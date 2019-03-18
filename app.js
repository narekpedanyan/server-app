const http = require('http');

function rqListener(req, res) {

}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body>');
    res.write('<p>asdf</p>')
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(3002);