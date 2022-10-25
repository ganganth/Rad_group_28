import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class teacherTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteTeacher = this.deleteTeacher.bind(this)
  }

  deleteTeacher() {
    axios
      .delete(
        'http://localhost:4000/teachers/delete-teacher/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Student successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.empno}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-teacher/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteTeacher} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
