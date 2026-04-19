

// const names = require('./names');
// require('./add');

// sayHi(john);
// sayHi(peter);
// sayHi(secret);

const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url=== '/'){
    return res.end('Welcom to my server!');
   }

   if(req.url === '/about'){
   return  res.end('This is the about page');
   }

  return res.end('<h1>Page not found</h1><a href="/">Back home</a>');
});

server.listen(3000); 
