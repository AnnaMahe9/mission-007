const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = mongoose.Schema (
    {
        username: {
            type: String,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String,
        }
    }
)

module.exports = mongoose.model('user', UserSchema)