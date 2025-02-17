import React from 'react'
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} lg={2} className="sidebar d-none d-md-block">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/patients">Patients</Nav.Link>
            <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link>
            <Nav.Link as={Link} to="/medical-records">Medical Records</Nav.Link>
            <Nav.Link as={Link} to="/prescriptions">Prescriptions</Nav.Link>
            <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
          </Nav>
        </Col>

        {/* Main content */}
        <Col md={9} lg={10} className="ms-sm-auto px-md-4">
          {/* Top Bar */}
          <Navbar bg="white" expand="lg" className="top-bar mb-4">
            <Container fluid>
              <Navbar.Brand href="/">ABC Healthcare</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                  <NavDropdown title="User Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Content Area */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patients" element={<h1>Patients</h1>} />
              <Route path="/appointments" element={<h1>Appointments</h1>} />
              <Route path="/medical-records" element={<h1>Medical Records</h1>} />
              <Route path="/prescriptions" element={<h1>Prescriptions</h1>} />
              <Route path="/settings" element={<h1>Settings</h1>} />
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
