const http = require('http');
const url = require('url');

const routes = require('./routes');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log(
    `Request method: ${req.method} | Endpoint: ${parsedUrl.pathname}`
  );

  const route = routes.find(
    (routeObj) =>
      routeObj.method === req.method && routeObj.endpoint === parsedUrl.pathname
  );

  if (route) {
    req.query = parsedUrl.query;

    res.send = (statusCode, body) => {
      res.writeHead(statusCode, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(body));
    }
    route.handler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`Cannot ${req.method} ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => console.log('Server started at port 3000'));
