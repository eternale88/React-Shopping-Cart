import React from 'react'
import Container from 'react-bootstrap/Container'
import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      price: 5
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
          <EstimatedTotal price={this.state.price.toFixed(2)}></EstimatedTotal>
          <ItemDetails price={this.state.price}></ItemDetails>
        </Container>
      </div>
    )
  }
}

export default App
