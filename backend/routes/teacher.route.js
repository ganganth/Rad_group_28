let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let teacherSchema = require('../models/Teacher')

// CREATE Student
router.route('/create-teacher').post((req, res, next) => {
  teacherSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
  teacherSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-teacher/:id').get((req, res) => {
  teacherSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-teacher/:id').put((req, res, next) => {
  teacherSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Teacher updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-teacher/:id').delete((req, res, next) => {
  teacherSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
