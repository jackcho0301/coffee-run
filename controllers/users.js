const User = require('../models/user');

const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json({users: users});
}

const createUser = async (req, res) => {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json( { user } );
}

const getUser = async (req, res) => {
    const { id: userId } = req.params; 
        const user = await User.findOne({_id : userId});

        if (!user) { //is task is null (if the id does not exist)
            return res.status(404).json({msg: `no user with id : ${userId}`}); //must return!
        }

        res.status(200).json({user: user}); 
}

const deleteUser = async (req, res) => {

}

module.exports = {     
    getAllUsers,
    createUser,
    getUser,
    deleteUser
}