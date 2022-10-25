import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditTeacher extends Component {

  constructor(props) {
    super(props)

    this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
    this.onChangeTeacherEmail = this.onChangeTeacherEmail.bind(this);
    this.onChangeTeacherempno = this.onChangeTeacherempno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      empno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/teachers/edit-teacher/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          empno: res.data.empno
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/teachers/update-teacher/' + this.props.match.params.id, teacherObject)
      .then((res) => {
        console.log(res.data)
        console.log('Teacher successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/teacher-list')
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

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Teacher
        </Button>
      </Form>
    </div>);
  }
}