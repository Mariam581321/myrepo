const mongoose = require('mongoose')
const autorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', autorsSchema)