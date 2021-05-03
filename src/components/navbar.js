import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function Nav() {
  return (
    <Navbar bg="white" variant="black" fixed="top" style={{ padding: '40px 30px' }}>
      <Navbar.Brand href="#home">
        <img
          src="/images/logo.png"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <em>Consulting - Production - Public Relations</em>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}
