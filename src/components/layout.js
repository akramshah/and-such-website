import React, { Fragment } from 'react'
import Header from './navbar'
import Sidebar from './sidebar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/index.css'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={{ span: 10, offset: 2 }} md={{ span: 9, offset: 3 }} style={{ paddingTop: "150px" }}>
            {children}
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}