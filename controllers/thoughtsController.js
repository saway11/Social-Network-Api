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

// create a thought
const createThought = async (req, res) => {
    try {
        const thoughtData = await Thought.create(res.body);
        const userData = await User.findOneAndUpdate(
            { _id: req.body.uderId },
            { $push: { thoughts: thoughtData._id } },
            { new: true }
        );
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}
// update thought by id
const updateThoughtById = async (req, res) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!thoughtData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(400).json(err);
    }
}