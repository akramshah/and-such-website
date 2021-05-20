import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import '../styles/index.css'
import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeAnimation = keyframes`${fadeInLeft}`;
const FadedText = styled.text`
  animation: 3s ${fadeAnimation};
  `;

const textStyle = {
  fontFamily: 'LiberationSans-Italic',
  fontSize: '14px'
}

export default function Nav() {
  return (
    <Navbar bg="white" variant="black" fixed="top" style={{ padding: '40px 30px' }}>
      <Navbar.Brand href="#home">
        <img
          src="/images/logo.png"
          height="35"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <FadedText>
        <Navbar.Text>
          <p className="my-2" style={textStyle}>Consulting - Production - Public Relations</p>
        </Navbar.Text>
        </FadedText>
      </Navbar.Collapse>
    </Navbar>
  )
}
