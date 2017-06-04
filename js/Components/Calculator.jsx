import React from "react";
import Result from "./Result.jsx";

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: "",
      cost: "",
      discount: 0.95,
      payment: 1
    }
  }

  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value
    })
  }

  handleDiscountChange = (event) => {
    this.setState({
      discount: event.target.value
    });
  };

  handlePaymentChange = (event) => {
    this.setState({
      payment: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let myCost = this.state.amount;

    if ((myCost >= 100) && (myCost <= 1000)) {
      this.setState({
        cost: 20
      })
    } else if ((myCost >= 1001) && (myCost <= 3000)) {
      this.setState({
        cost: 70
      })
    } else if ((myCost >= 3001) && (myCost <= 6000)) {
      this.setState({
        cost: 130
      })
    } else if ((myCost >= 6001) && (myCost <= 9000)) {
      this.setState({
        cost: 180
      })
    } else if ((myCost >= 9001) && (myCost <= 10000)) {
      this.setState({
        cost: 200
      })
    }
  }
  render() {
    return (
      <section id="form">
        <form onSubmit={this.handleSubmit} className="form__form-area">
          <h2>Kalkulator składki ubezpieczeniowej</h2>
          <label htmlFor="amount">Wpisz kwotę ubezpieczenia
            <input type="number"
                   id="amount"
                   className="form__input"
                   placeholder="Kwota ubezpieczenia..."
                   min="100" max="10000"
                   value={this.state.amount}
                   onChange={this.handleAmountChange} />
          </label>

          <label htmlFor="discount">Wybierz rodzaj zniżki/zwyżki
            <select name="discount"
                    id="discount"
                    className="form__select"
                    value={this.state.discount}
                    onChange={this.handleDiscountChange}>
              <option value={0.95}>Bezszkodowe ubezpieczenie</option>
              <option value={1.08}>Wystąpienie szkody</option>
            </select>
          </label>

          <label htmlFor="payment">Wybierz formę płatności
            <select name="payment"
                    id="payment"
                    className="form__select"
                    value={this.state.payment}
                    onChange={this.handlePaymentChange}>
              <option value={0.98}>1 rata</option>
              <option value={1}>2 raty</option>
              <option value={1.04}>4 raty</option>
            </select>
          </label>

          <input name="submit" className="form__btn" type="submit" value="SPRAWDŹ" />
          <Result result={(this.state.cost * this.state.discount) * this.state.payment} />

        </form>
      </section>
    )
  }
}

export default Calculator;
