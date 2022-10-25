import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateTeacher extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
    this.onChangeTeacherEmail = this.onChangeTeacherEmail.bind(this);
    this.onChangeTeacherempno = this.onChangeTeacherempno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      empno: ''
    }
  }

  onChangeTeacherName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeTeacherEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeTeacherempno(e) {
    this.setState({ empno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const teacherObject = {
      name: this.state.name,
      email: this.state.email,
      empno: this.state.empno
    };
    axios.post('http://localhost:4000/students/create-student', teacherObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', empno: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeTeacherName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeTeacherEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Emp no</Form.Label>
          <Form.Control type="text" value={this.state.empno} onChange={this.onChangeTeacherempno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Teacher
        </Button>
      </Form>
    </div>);
  }
}