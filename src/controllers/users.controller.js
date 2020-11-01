const usersCtrl = {};

const User = require('../models/User');

// ALL USERS
usersCtrl.getUsers = async (req, res) => {
    try {
        
        const users = await User.find();

        res.json(users)

    } catch (error) {
        console.log(error)
    }
};


// CREATE USER
usersCtrl.createUser = async (req, res) => {
    try {
        
        const { username } = req.body;

        const newUser = await new User({ username });

        await newUser.save();

        res.json({ message: 'User Saved' })

    } catch (error) {
        console.log(error)
    }
};


// DELETE USER
usersCtrl.deleteUser = async (req, res) => {
    try {
        
        const id = req.params.id;

        await User.findOneAndDelete({ _id: id })

        res.json({ message: 'Delete User' })
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = usersCtrl;