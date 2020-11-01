const usersCtrl = {};

// ALL USERS
usersCtrl.getUsers = (req, res) => {
    res.json({ message: [] })
};


// CREATE USER
usersCtrl.createUser = (req, res) => {
    res.json({ message: 'User Saved' })
};


// DELETE USER
usersCtrl.deleteUser = (req, res) => {
    res.json({ message: 'Delete User' })
}


module.exports = usersCtrl;