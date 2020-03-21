import React from 'react'
import { Button, Collapse, Card, Form, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { handleChange } from '../../actions/index'

class PromoCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleChange = (e) => {
    this.props.handleChange(e)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Button
          className="promo-code-button mt-3"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {!this.state.open ? `Apply ` : `Hide `}
          promo code
          {!this.state.open ? ` +` : ` -`}
        </Button>

        <Collapse in={this.state.open}>
          <div>
            <Card body className="mt-3">
              <Row>
                <Col md={12}>
                  <Form>
                    <Form.Group controlId="formInlineName">
                      <Form.Label>Promo Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Promo Code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Button
                      block
                      variant="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value
})
export default connect(mapStateToProps, { handleChange })(PromoCode)
