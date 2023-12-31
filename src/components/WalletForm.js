import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, saveFormOnRedux } from '../redux/actions';

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

  handleSubmit = () => {
    const { saveAllForm } = this.props;
    saveAllForm(this.state);
    this.setState((prevState) => ({
      ...INITIAL_STATE,
      id: prevState.id + 1,
    }));
  };

  handleOptionsChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
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
              value={ currency }
              onChange={ this.handleOptionsChange }
            >
              Moeda
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
          <label
            htmlFor="method"
          >
            <select
              data-testid="method-input"
              name="method"
              id="method"
              value={ method }
              onChange={ this.handleOptionsChange }
            >
              Médoto de pagamento
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            <select
              data-testid="tag-input"
              name="tag"
              onChange={ this.handleOptionsChange }
              value={ tag }
            >
              Tag
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>

      </section>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  saveAllForm: PropTypes.func.isRequired,
};

const mapStateToProps = (
  { wallet: { currencies } },
) => ({ currencies });

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
  saveAllForm: (payload) => dispatch(saveFormOnRedux(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
