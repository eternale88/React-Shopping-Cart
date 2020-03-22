import React from 'react'
import Container from 'react-bootstrap/Container'
import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails'
import './App.css'
import PromoCode from './components/PromoCode/PromoCode'

import { connect } from 'react-redux'
import { handleChange } from './actions/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }
  }

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.0875
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        })
      }
    )
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        this.setState({
          disablePromoButton: true
        })
      )
    }
  }
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)}></TaxesFees>
          <hr />
          <EstimatedTotal
            price={this.state.estimatedTotal.toFixed(2)}
          ></EstimatedTotal>
          <ItemDetails price={this.state.estimatedTotal}></ItemDetails>
          <hr />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value
})
export default connect(mapStateToProps, { handleChange })(App)
