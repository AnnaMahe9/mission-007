const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const taskSchema = mongoose.Schema (
    {
        title: {
            type: String,
            unique: true,
            required: true
        },

        date: {
            type: Date,
            default: Date.now,
            required: true
        },

        toCompleteBy: {
            type: String,
            enum: ["Avant la fin de la journée", "Avant la fin de la semaine", "Avant la fin du mois"]
        },

        isCompleted: {
            type: Boolean,
            default: false
        }
    }
    
)

module.exports = mongoose.model('task', taskSchema)