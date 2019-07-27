var route = require('express').Router()
var Name = require('../models/Name')
var Salary = require('../models/Salary')
var Work = require('../models/Work')

route.get('/', function(req, res) {
    res.render('home');
})

route.post('/api/add-salary', function(req, res) {
    let salary = new Salary();
    salary.salary = req.body.salary
    salary.save(function(err, salary) {
        if(err) {
            res.status(500).json({
                message: 'failed'
            })
        } else {
            res.status(201).json({
                message: 'success',
                data: salary
            })
        }
    })
})

route.post('/api/add-work', function(req, res) {
    let work = new Work();
    work.name = req.body.name
    work.id_salary = req.body.id_salary
    work.save(function(err, work) {
        if(err) {
            res.status(500).json({
                message: 'failed'
            })
        } else {
            res.status(201).json({
                message: 'success',
                data: work
            })
        }
    })
})

route.post('/api/add-name', function(req, res) {
    let name = new Name();
    name.name = req.body.name
    name.id_salary = req.body.id_salary
    name.id_work = req.body.id_work
    name.save(function(err, name) {
        if(err) {
            res.status(500).json({
                message: 'failed'
            })
        } else {
            res.status(201).json({
                message: 'success',
                data: name
            })
        }
    })
})

route.get('/api/get-name', function(req, res) {
    Name.find({})
    .populate('id_work')
    .populate('id_salary')
    .then((name) => {
        res.status(200).json({
            message: 'success',
            data: name
        })
    })
    .catch(() => {
        res.status(500).json({
            message: 'failed'
        })
    });
})

route.delete('/api/delete-name/:id', function(req, res) {
    Name.remove({_id: req.params.id})
    .then((name) => {
        res.status(200).json({
            message: 'success',
            data: name
        })
    })
    .catch(() => {
        res.status(500).json({
            message: 'failed'
        })
    });
})

route.get('/api/get-salary', function(req, res) {
    Salary.find({})
    .then((salary) => {
        res.status(200).json({
            message: 'success',
            data: salary
        })
    })
    .catch(() => {
        res.status(500).json({
            message: 'failed'
        })
    });
})

route.get('/api/get-work', function(req, res) {
    Work.find({})
    .populate('id_salary')
    .then((work) => {
        res.status(200).json({
            message: 'success',
            data: work
        })
    })
    .catch(() => {
        res.status(500).json({
            message: 'failed'
        })
    });
})

module.exports = route