import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateTeacher from './components/create-teacher.component'
import EditTeacher from './components/edit-teacher.component'
import TeacherList from './components/teacher-list.component'

function TeacherComponent() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/reate-teacher'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/reate-teacher'} className="nav-link">
                    Create Teacher
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/student-list'} className="nav-link">
                    Teacher List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateTeacher {...props} />}
                  />
                  <Route
                    exact
                    path="/create-teacher"
                    component={(props) => <CreateTeacher {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-teacher/:id"
                    component={(props) => <EditTeacher {...props} />}
                  />
                  <Route
                    exact
                    path="/teacher-list"
                    component={(props) => <TeacherList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default TeacherComponent