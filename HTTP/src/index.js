const http = require('http');

const routes = require('./routes');

const server = http.createServer((req, res) => {
  console.log(`Request method: ${req.method} | Endpoint: ${req.url}`);

  const route = routes.find(
    (routeObj) =>
      routeObj.method === req.method && routeObj.endpoint === req.url
  );

  if (route) {
    route.handler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`Cannot ${req.method} ${req.url}`);
  }
});

server.listen(3000, () => console.log('Server started at port 3000'));
