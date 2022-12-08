const router = require('express').Router();

const {
    getUsers,
    createUser,
    getSingleUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('.../controllers/userController');

// api/users
router.route('/users').get(getUsers).post(createUser);

// api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;