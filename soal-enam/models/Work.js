var mongoose = require('mongoose')
var Schema = mongoose.Schema

var workSchema = new mongoose.Schema({
    name: {
        type: String
    },
    id_salary: {
        type: Schema.Types.ObjectId,
        ref : "Salary"
    }
})

var Work = mongoose.model("Work", workSchema);

module.exports = Work;