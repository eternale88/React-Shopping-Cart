import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Subtotal extends React.Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Subtotal</Col>
        <Col md={6}>{`$${this.props.price}`}</Col>
      </Row>
    )
  }
}

export default Subtotal
