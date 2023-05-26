const users = require('../mocks/users');
const products = require('../mocks/products');

module.exports = {
  listUsers(req, res) {
    const { order } = req.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(sortedUsers));
  },

  listProducts(req, res) {
    const { order } = req.query;

    const sortedProducts = products.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(sortedProducts));
  },
};
