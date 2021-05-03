import React from 'react'
import Nav from 'react-bootstrap/Nav'

const sidebarContainerStyle = {
  minHeight: '100vh',
  paddingTop: '140px',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center'
}

export default function Sidebar() {
  return (
    <div className="sidebar-container position-fixed" style={sidebarContainerStyle}>
      <Nav defaultActiveKey="/home" className="flex-column px-3">
        <Nav.Link className="text-dark" href="/home">Home</Nav.Link>
        <Nav.Link className="text-dark" eventKey="press">Press</Nav.Link>
        <Nav.Link className="text-dark" eventKey="clients">Clients</Nav.Link>
        <Nav.Link className="text-dark" eventKey="about">About</Nav.Link>
        <Nav.Link className="text-dark" eventKey="contact">Contact</Nav.Link>
      </Nav>
    </div>
  )
}
