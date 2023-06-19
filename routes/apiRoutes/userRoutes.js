const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');



// set up GET all and POST at /api/thoughts

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', deleteFriend);

module.exports = router;
