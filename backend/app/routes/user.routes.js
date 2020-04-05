
module.exports = function(app) {
    const users = require('../controllers/user.controller.js');

    app.post('/users', users.create);
    app.get('/users/:id', users.findById);
    app.put('/users/:id', users.update);
    app.delete('/users/:id', users.delete);
};
