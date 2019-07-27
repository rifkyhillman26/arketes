var mongoose = require('mongoose')

var salarySchema = new mongoose.Schema({
    salary: {
        type: Number
    }
})

var Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;