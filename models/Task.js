const mongoose = require('mongoose')
const {Schema} = mongoose

const TaskShema = new Schema({ 
    name: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        default: false
    },

    created: {
        type: Date,
        default: Date.now
    }

})

const Task = mongoose.model('Task', TaskShema);

module.exports = Task