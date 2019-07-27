var mongoose = require('mongoose')
var Schema = mongoose.Schema

var nameSchema = new mongoose.Schema({
    name: {
        type: String
    },
    id_work: {
        type: Schema.Types.ObjectId,
        ref : "Work" 
    },
    id_salary: {
        type: Schema.Types.ObjectId,
        ref : "Salary"
    }
})

var Name = mongoose.model("Name", nameSchema);

module.exports = Name;