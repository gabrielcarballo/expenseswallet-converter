import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
  { email: state.user.email, expenses: state.wallet.expenses });

const timer = 1000;

class Header extends Component {
  state = {
    totalExpenses: 0,
  };

  componentDidMount() {
    this.handleExpenses();
  }

  handleExpenses = () => {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, expense) => {
      const rates = expense.exchangeRates;
      const exchange = rates[expense.currency].ask;
      const expanseConverted = expense.value * exchange;
      acc += expanseConverted;
      return acc;
    }, 0);
    return this.setState({
      totalExpenses: totalExpenses.toFixed(2),
    }, () => {
      setInterval(() => {
        this.handleExpenses();
      }, timer);
    });
  };

  render() {
    const { email } = this.props;
    const { totalExpenses } = this.state;
    return (
      <header>
        <nav>
          <span
            data-testid="email-field"
          >
            { email }
          </span>
          <span
            data-testid="total-field"
          >
            { totalExpenses }
          </span>
          <span
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
