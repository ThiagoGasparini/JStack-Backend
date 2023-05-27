const UserController = require('./controllers/UserController');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/products',
    method: 'GET',
    handler: UserController.listProducts,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  },
];
