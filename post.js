const http = require('http')
const querystring = require('querystring')
var qs, name, passwd
const port = 4000
http.createServer((req, res) => {
    var value = ""
    req.on('data', (ch) => {
        console.log(ch)
        value += ch
        console.log("readable data " + value)
    });
    req.on('end', () => {
        qs = querystring.parse(value)
        console.log(qs)
        name = qs['username']
        passwd = qs['password']
        res.write("<head> <body style=background-image:url(https://media.istockphoto.com/id/1174989482/photo/gray-abstract-minimal-motion-backgrounds-loopable-elements-4k-resolution.jpg?s=612x612&w=0&k=20&c=AUOc3jY7pRLg2RylcdnOFHmBT63LPx80X474UQDsDY4=)>Welcome " + name + " your Password is " + passwd)
        res.end();
    });
}).listen(port, (error) => {
    if (error) {
        console.log("error occures")
    }
    else {
        console.log("server listening on " + port)
    }
});

