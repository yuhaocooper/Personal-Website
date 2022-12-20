const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        id: {type: Number,required: true,},
        name: {type: String,required: true}
    },
    {
        collection: 'users'
    }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;