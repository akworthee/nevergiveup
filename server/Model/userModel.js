const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    avatar: Buffer
})

const userModel = mongoose.model("usertables",userSchema);

module.exports = userModel;