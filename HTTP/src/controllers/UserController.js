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

    res.send(200, sortedUsers);
  },

  listProducts(req, res) {
    const { order } = req.query;

    const sortedProducts = products.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    res.send(200, sortedProducts);
  },

  createUser(req, res) {
    const { body } = req

    const lastUserId = users[users.length - 1].id;
    const newUser = {
      id: lastUserId + 1,
      name: body.name,
    }

    users.push(newUser);

    res.send(201, newUser);
  },
};
