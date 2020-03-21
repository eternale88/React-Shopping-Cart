import React from 'react'

import { Col, Row } from 'react-bootstrap'

class TaxesFees extends React.Component {
  render() {
    return (
      <Row className="mb-3">
        <Col md={6}>Est. taxes & fees (Based on 94085)</Col>
        <Col md={6}>{`$${this.props.taxes}`}</Col>
      </Row>
    )
  }
}

export default TaxesFees
