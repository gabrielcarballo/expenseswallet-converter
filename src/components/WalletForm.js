import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  id: 0,
  exchangeRates: {},
};

class WalletForm extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleOptionsChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, /*  currency, method, tag, id, exchangeRates */
    } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="text"
              data-testid="value-input"
              name="value"
              onChange={ this.handleOptionsChange }
              value={ value }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              data-testid="description-input"
              name="description"
              onChange={ this.handleOptionsChange }
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            <select
              data-testid="currency-input"
              name="currency"
              id="currency"
              onChange={ this.handleOptionsChange }
            >
              { currencies && currencies.map((e, i) => (
                <option
                  key={ i }
                  value={ e }
                >
                  { e }
                </option>
              )) }
            </select>
          </label>

        </form>
      </section>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = (
  { wallet: { currencies } },
) => ({ currencies });

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
