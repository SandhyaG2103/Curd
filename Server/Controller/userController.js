const User = require('../Model/userModel');

exports.create = async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(400).json({ message: 'Invalid user data' });
        }
        const saveData = await userData.save();
        res.status(201).json(saveData);
    } catch (error) {
        console.error('Error in creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAll = async (req, res) => {
    try {
        const saveData = await User.find();
        if (!saveData || saveData.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(saveData);
    } catch (error) {
        console.error('Error in getting all users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userExist);
    } catch (error) {
        console.error('Error in getting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: 'User not found' });
        }
        const update = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(update);
    } catch (error) {
        console.error('Error in updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: 'User not found' });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error in deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

