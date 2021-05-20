import React, { Fragment } from 'react'
import Header from './navbar'
import sidebar from './sidebar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row>
          <Col lg="3" md="4">
            <Sidebar />
          </Col>
          <Col lg="9" md="8">
            {children}
          </Col>
        </Row>
        
      </Container>
    </Fragment>
  )
}