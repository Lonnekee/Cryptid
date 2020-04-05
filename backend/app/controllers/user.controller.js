/**
 * This file contains the four CRUD operations on a user.
 */
const ObjectID = require('mongodb').ObjectID; // When searching for a file based on id, this id should be of type ObjectID.
const User = require('../models/user.model'); // Import user schema created with Mongoose

/* CREATE/POST a user */
exports.create = (req, res) => {
    console.log(req.body);

    /* Create a user */
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        favouriteCookie: req.body.favouriteCookie,
        favouriteBoardGame: req.body.favouriteBoardGame
    });

    // Save user in database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

/* READ/FIND a user by id */
exports.findById = (req, res) => {
    const id = req.params.id;
    User.findById(id)
    .then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + id
            });
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + id
        });
    });
};

/**
 * UPDATE a user with the given id.
 *
 * Note that, if the request doesn't have a body, all fields in the original file will be nullified!
 * The body replaces the original file entirely.
 */
exports.update = (req, res) => {
    const id = req.params.id;
    User.findOneAndUpdate({ _id: id }, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        favouriteCookie: req.body.favouriteCookie,
        favouriteBoardGame: req.body.favouriteBoardGame
    }, {new: true})
    .then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + id
            });
        }
        return res.status(500).send({
            message: "Error updating customer with id " + id
        });
    });
};

/* DELETE a user */
exports.delete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + id
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + id
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + id
        });
    });
};