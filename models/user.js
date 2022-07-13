const mongoose = require('mongoose');
const userSchema = new mongoose.Schema( {
    name : {
        type: String,
        required: [true, 'user name must be provided'],
        trim: true, //trim whitespace
        maxlength: [20, 'name cannot be more than 20 characters'],
        unique: true,
    },
    // preference: {
    //     type: String,
    //     // enum: ['ikea', 'liddy', 'caressa', 'marcos']
    //     enum: {
    //         values: ['most recently ordered', 'default order', 'caressa', 'marcos'],
    //         message: '{VALUE} is not supported'
    //     }
    // }
});

module.exports = mongoose.model('User', userSchema);