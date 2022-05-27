const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      const choices = ['rock', 'paper', 'scissors'];
      function returnComputerChoice() {
        return choices[Math.floor(Math.random() * 3)];
      }
      const computerChoice = {
        result: returnComputerChoice()
      }
      res.end(JSON.stringify(computerChoice));
  } else if(params['student'] != 'leon'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        name: "unknown",
        status: "unknown",
        currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
  } else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});



server.listen(8000);
