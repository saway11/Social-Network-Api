const { User, Thought } = require('../models');

// get all users
const getAllUsers = async (req, res) => {
    console.log('getAllUsers');
    try {
        const userData = await User.find().populate('thoughts').populate('friends');
        console.log('userData', userData);
        res.status(200).json(userData);
    } catch (err) {
        console.log('err', err);
        res.status(400).json(err);
    }
};

// get user by id
const getUserById = async (req, res) => {
    try {
        const userData = await User.findByid(req.params.id).populate('thoughts').populate('friends');
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
};

// create a user
