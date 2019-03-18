const http = require('http');

function rqListener(req, res) {

}

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
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