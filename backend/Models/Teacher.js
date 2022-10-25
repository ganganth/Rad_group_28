const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  empno: {
    type: Number
  }
}, {
    collection: 'teachers'
  })

module.exports = mongoose.model('Teacher', teacherSchema)