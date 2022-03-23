const mongoose = require("mongoose");

const loggedUserSchema = mongoose.Schema({
userId: {
    type: String,
    require: [true, 'User Id is required']
},
location: {
    type: {
        type: String,
        enum: ['Point']
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    },
    formattedAddress: String
},
createdAt: {
    type: Date,
    default: Date.now
}

})

module.exports = mongoose.model('loggedusers', loggedUserSchema)