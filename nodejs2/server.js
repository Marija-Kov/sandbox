const http = require('http'); // this is a built-in node.js module
const fs = require('fs'); // this one, too

const server = http.createServer((req, res) => { 
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');  

  let path = "./pages/"; // directory where all the files we're serving are located

  switch(req.url) {
      case '/' :
          path += 'page.html';
          break;
      case '/about':
          path += 'about.html';
          break;
        default:
            path += '404.html';
            break;
  }

fs.readFile(path, (err, data) => {
  err
    ? console.log(err)
    : //res.write(data); // for only one 'data', write can be omitted, data can go in the end() 
      res.end(data);
});

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})


////// 3 steps to fulfill a http request from the browser - read-write-end:
//   res.write('<h1>hello, pooches</h1>');  // for simple, small amount of content, html can be served this way
//   res.write("<p>hello, floofers</p>");
//   res.end();