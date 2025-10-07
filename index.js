const html = `
<!DOCTYPE html>
<html>
<head>
    <title>About me</title>
</head>
<body>
    <h1>HELLO THERE</h1>
    <h2>HERE ARE SOME FACTS ABOUT ME</h2>
    <p>I'm ZA</p>
    <p>I'm 20</p>
    <p>uhhhh idk what else to put here</p>
</body>
</html>
`

var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
