import React from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
{
  /* Tooltip modal*/
  /* Import Bootstrap components from React Bootstrap*/
}

const styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },
  totalSavings: {
    color: 'red',
    fontWeight: 800
  }
}

class PickupSavings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    if (!this.state.hover) {
      styles.pickupSavings = {
        textDecoration: 'none'
      }
    } else {
      styles.pickupSavings = {
        textDecoration: 'underline'
      }
    }

    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Picking up your order in the store helps cut costs, and we pass the
          savings on to you.
        </p>
      </Tooltip>
    )

    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div
              style={styles.pickupSavings}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            >
              Pickup Savings
            </div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    )
  }
}

export default PickupSavings
