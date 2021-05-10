import React from 'react'
import Nav from 'react-bootstrap/Nav'
import '../pages/index.css'
import styled, { keyframes } from 'styled-components';
import { fadeInRight, flash } from 'react-animations';
import { Link } from 'react-router';

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
  paddingTop: '140px',
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
      <Nav defaultActiveKey="/home" className="flex-column px-3" style={textStyle}>
        <FlashNav><Nav.Link className="text-dark" eventKey="/homeCarousel">Home</Nav.Link></FlashNav>
        <FlashNav><Nav.Link className="text-dark" eventKey="/press">Press</Nav.Link></FlashNav>
        <FlashNav><Nav.Link className="text-dark" eventKey="/clients">Clients</Nav.Link></FlashNav>
        <FlashNav><Nav.Link className="text-dark" eventKey="/about">About</Nav.Link></FlashNav>
        <FlashNav><Nav.Link className="text-dark" eventKey="/contact">Contact</Nav.Link></FlashNav>
      </Nav>
      </FadedNav>
    </div>
  )
}
