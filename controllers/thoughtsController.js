const { Thought, User } = require('../models');

// get all thoughts
const getAllThoughts = async (req, res) => {
    try {
        const thoughtData = await Thought.find();
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(400).json(err);
    }
}

// get thought by id
const getThoughtById = async (req, res) => {
    try {
        const thoughtData = await Thought.findById(req.params.id);
        if (!thoughtData) {
            res.status(404).json({ message: 'No thought found with this id!'});
            return;
        }
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(400).json(err)
    }
}