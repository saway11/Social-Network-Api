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