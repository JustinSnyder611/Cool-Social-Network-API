const router = require('express').Router();

// api/users
router.route('/users').get(getUsers).post(createUser);