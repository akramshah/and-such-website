import React, { Fragment } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Contact() {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Row>
          <Col className="d-sm-none d-md-block" lg="3" md="4">
            <Sidebar />
          </Col>
          <Col className="justify-content-center" lg="9" md="8" style={{ paddingTop: '140px', display: 'flex'}}>
            <div className="w-100">Hello World</div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}