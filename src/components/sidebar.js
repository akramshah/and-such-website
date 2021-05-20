import React from 'react'
import Nav from 'react-bootstrap/Nav'
import '../styles/index.css'
import styled, { keyframes } from 'styled-components';
import { fadeInRight, flash } from 'react-animations';
import { Link } from 'gatsby';

const fadeAnimation = keyframes`${fadeInRight}`;
const flashAnimation = keyframes`${flash}`;
const FadedNav = styled.text`
  animation: 3s ${fadeAnimation};
`;
const FlashNav = styled.text`
&:hover {
  animation: 2s ${flashAnimation};
}`

const sidebarContainerStyle = {
  minHeight: '100vh',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center'
}

const textStyle = {
  fontFamily: 'LiberationSans-Regular',
  fontSize: '18px',
  fontWeight: 'bolder'
}

export default function Sidebar() {
  return (
    <div className = "sidebar-container position-fixed"
    style = {
      sidebarContainerStyle
    } >
    <FadedNav>
      <Nav defaultActiveKey="/home" className="flex-column px-5" style={textStyle}>
        <FlashNav><Nav.Link eventKey="/homeCarousel"><Link className="text-dark text-decoration-none" to="/">Home</Link></Nav.Link></FlashNav>
        <FlashNav><Nav.Link eventKey="/press"><Link className="text-dark text-decoration-none" to="/press">Press</Link></Nav.Link></FlashNav>
        <FlashNav><Nav.Link eventKey="/clients"><Link className="text-dark text-decoration-none" to="/clients">Clients</Link></Nav.Link></FlashNav>
        <FlashNav><Nav.Link eventKey="/about"><Link className="text-dark text-decoration-none" to="/about">About</Link></Nav.Link></FlashNav>
        <FlashNav><Nav.Link eventKey="/contact"><Link className="text-dark text-decoration-none" to="/contact">Contact</Link></Nav.Link></FlashNav>
      </Nav>
      </FadedNav>
    </div>
  )
}
